"use client";

import { useState } from "react";
import DynamicTable from "@/components/reusable/DynamicTable";
import Link from "next/link";
import { useDeleteUserMutation, useGetUserQuery } from "@/redux/features/auth/authApi";

export default function DashboardUserTable() {
  const { data, error, isLoading } = useGetUserQuery({});
  console.log(data,"ppppp")

  
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [deleteUser] = useDeleteUserMutation();

const handleDelete = async (userId: any) => {
  if (confirm("Are you sure you want to delete this user?")) {
    try {
      await deleteUser(userId).unwrap();
    
    } catch (err) {
      console.error(err);
      alert("Failed to delete user");
    }
  }
};


  // const userList = data?.data || [];

const users = data?.map((user: any) => ({
  id: user.id ,
  full_name: user.name,
  email_address: user.email,
  mobile_number: user.phone,
  enquiry_type: "general",
  status: "Active",
  additional_information: user.company?.name,
  createdAt: new Date().toISOString(),
})) || [];

  // Pagination
  const totalItems = users.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = users.slice(startIndex, endIndex);

  // Table columns
  const columns = [
    { label: "Full Name", accessor: "full_name", width: "180px" },
    { label: "Email Address", accessor: "email_address", width: "220px" },
    { label: "Mobile Number", accessor: "mobile_number", width: "150px" },
    {
      label: "Enquiry Type",
      accessor: "enquiry_type",
      width: "120px",
      formatter: (value: string) => (
        <span className="capitalize px-2 py-1 rounded bg-gray-100 text-xs">
          {value}
        </span>
      ),
    },
    {
      label: "Status",
      accessor: "status",
      width: "140px",
      formatter: (value: string) => {
        const statusColors: Record<string, string> = {
          "Pre Application": "bg-blue-100 text-blue-700",
          Applied: "bg-green-100 text-green-700",
          Pending: "bg-yellow-100 text-yellow-700",
          Inactive: "bg-gray-100 text-gray-700",
          Active: "bg-green-100 text-green-700",
        };

        return (
          <span
            className={`capitalize px-2 py-1 rounded text-xs font-medium ${
              statusColors[value] || "bg-gray-100 text-gray-700"
            }`}
          >
            {value}
          </span>
        );
      },
    },
 
    {
      label: "Action",
      accessor: "id",
      width: "150px",
      formatter: (_value: any, row: any) => (
        <div className="flex gap-2">
          <Link
            href={`/user/${row.id}`}
            className="text-xs underline text-blue-600"
          >
            View
          </Link>
          <Link
            href={`/user/edit/${row.id}`}
            className="text-xs underline text-green-600"
          >
            Edit
          </Link>
          <button
            onClick={() => handleDelete(row.id)}
            className="text-xs underline text-red-600"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  // ✅ Handle loading & error AFTER hooks
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users...</p>;

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">User List</h2>
      </div>

      <DynamicTable
        columns={columns}
        data={currentData}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalpage={totalPages}
        totalItems={totalItems}
        onPageChange={setCurrentPage}
        setItemsPerPage={setItemsPerPage}
        noDataMessage="No users found"
        loading={isLoading} 
      />
    </div>
  );
}