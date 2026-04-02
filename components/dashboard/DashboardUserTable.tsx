"use client";

import { useState } from "react";
import DynamicTable from "@/components/reusable/DynamicTable";
import Link from "next/link";

export default function DashboardUserTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Dummy user data
  const demoData = [
    {
      id: 1,
      full_name: "Sujon Roy",
      email_address: "sujon@example.com",
      mobile_number: "01712345678",
      enquiry_type: "general",
      status: "Pre Application",
      additional_information: "Interested in Diploma courses",
      createdAt: new Date(2026, 2, 1).toISOString(),
    },
    {
      id: 2,
      full_name: "Rifat Ahmed",
      email_address: "rifat@example.com",
      mobile_number: "01787654321",
      enquiry_type: "support",
      status: "Applied",
      additional_information: "Requested course details",
      createdAt: new Date(2026, 2, 3).toISOString(),
    },
    {
      id: 3,
      full_name: "Nabila Khan",
      email_address: "nabila@example.com",
      mobile_number: "01812349876",
      enquiry_type: "general",
      status: "Pending",
      additional_information: "Looking for online courses",
      createdAt: new Date(2026, 2, 5).toISOString(),
    },
    {
      id: 4,
      full_name: "Fahim Islam",
      email_address: "fahim@example.com",
      mobile_number: "01987651234",
      enquiry_type: "support",
      status: "Inactive",
      additional_information: "No recent activity",
      createdAt: new Date(2026, 2, 7).toISOString(),
    },
    {
      id: 5,
      full_name: "Ayesha Siddique",
      email_address: "ayesha@example.com",
      mobile_number: "01723456789",
      enquiry_type: "general",
      status: "Applied",
      additional_information: "Requested brochure",
      createdAt: new Date(2026, 2, 9).toISOString(),
    },

  ];

  // Pagination
  const totalItems = demoData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = demoData.slice(startIndex, endIndex);

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
    { label: "Additional Info", accessor: "additional_information", width: "180px" },
    {
      label: "Created At",
      accessor: "createdAt",
      width: "120px",
      formatter: (value: string) =>
        new Date(value).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
    },
     {
  label: "Action",
  accessor: "id",
  width: "150px",
 formatter: (_value: any, row: any) => (
  <div className="flex gap-2">
    <Link href={`/user/${row.id}`} className="text-xs underline text-blue-600">
      View
    </Link>
    <Link href={`/user/edit/${row.id}`} className="text-xs underline text-green-600">
      Edit
    </Link>
    <button
      onClick={() => alert("Delete " + row.full_name)}
      className="text-xs underline text-red-600"
    >
      Delete
    </button>
  </div>
),
},
 
  ];

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
  //         onView={(row) => alert("View " + row.full_name)}
  // onEdit={(row) => alert("Edit " + row.full_name)}
  // onDelete={(row) => alert("Delete " + row.full_name)}
        noDataMessage="No users found"
        loading={false}
      />
    </div>
  );
}