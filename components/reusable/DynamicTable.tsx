"use client";

import Image from "next/image";
import React from "react";
import Loader from "./Loader";
import PaginationPage from "./PaginationPage";

interface ColumnConfig {
  label: React.ReactNode;
  width: any;
  accessor: string;
  formatter?: (value: any, row: any, index?: number) => React.ReactNode;
}

interface DynamicTableProps {
  columns: ColumnConfig[];
  data: any[];
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onView?: (row: any) => void;
  onEdit?: (row: any) => void;
  onDelete?: (id: any) => void;
  noDataMessage?: string;
  totalpage: number;
  totalItems?: number;
  setItemsPerPage?: (n: number) => void;
  loading?: boolean;
  error?: string;
  border?: boolean;
  renderFooter?: (colSpan: number) => React.ReactNode;
}

export default function DynamicTable({
  columns,
  data,
  currentPage,
  itemsPerPage,
  border = true,
  onPageChange,
  loading,
  onView,
  onEdit,
  totalpage,
  onDelete,
  noDataMessage = "No data found !.",
  totalItems,
  setItemsPerPage,
  error,
  renderFooter,
}: DynamicTableProps) {
  return (
 <div className="overflow-x-auto w-full scrollbar-thin scrollbar-thumb-gray-400 ">
 <div className="border rounded-lg overflow-x-auto w-full scrollbar-thin scrollbar-thumb-gray-400">
   <div className="inline-block min-w-full ">
    <table className="min-w-max w-full text-left border-collapse ">
    <thead className="sticky top-0 bg-blackColor">
      <tr>
        {columns.map((col, index) => (
          <th
            key={index}
            style={{ width: col.width || "auto" }}
            className={`px-4 py-3 text-sm font-medium ${
              index === 0
                ? "rounded-l-lg"
                : index === columns.length - 1
                ? "rounded-r-lg"
                : ""
            }`}
          >
            {col.label}
          </th>
        ))}
        {(onView || onDelete) && <th className="px-4 py-3">Action</th>}
      </tr>
    </thead>
    <tbody>
      {data?.length > 0 ? (
        data.map((row, i) => (
          <tr key={i} className="border-t border-gray-100">
            {columns.map((col, idx) => (
              <td
                key={idx}
                style={{ width: col.width || "auto" }}
                className="px-4 py-3 text-sm text-[#4a4c56]"
              >
                {col.formatter
                  ? col.formatter(row[col.accessor], row)
                  : row[col.accessor]}
              </td>
            ))}
            {(onView || onDelete) && (
              <td className="px-4 py-3 flex gap-2 items-center">
                {onView && (
                  <span
                    className="text-xs underline cursor-pointer text-blue-600"
                    onClick={() => onView(row)}
                  >
                    View
                  </span>
                )}
                {onEdit && (
                  <span
                    className="text-xs underline cursor-pointer text-green-600"
                    onClick={() => onEdit(row)}
                  >
                    Edit
                  </span>
                )}
                {onDelete && (
                  <button
                    onClick={() => onDelete(row.id)}
                    className="text-xs underline text-red-600"
                  >
                    Delete
                  </button>
                )}
              </td>
            )}
          </tr>
        ))
      ) : (
        <tr>
          <td
            colSpan={columns.length + (onView || onDelete ? 1 : 0)}
            className="px-4 py-10 text-center text-gray-500 text-sm"
          >
            No data found
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>
 </div>
      <div>
        <PaginationPage
          totalPages={totalpage}
          dataLength={data?.length || 0}
          totalItems={totalItems}
          onPageChange={onPageChange}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
        />
      </div>
    </div>
  );
}