"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function DialogDemo({ userId, users }: any) {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    username: "",
    website: "",
    fullSite: "",
    company: "",
  });


  const selectedUser = users.find((u: any) => u.id === userId);

  useEffect(() => {
    if (selectedUser) {
      setFormData({
        name: selectedUser.full_name || "",
        phone: selectedUser.mobile_number || "",
        username: selectedUser.email_address || "",
        website: selectedUser.additional_information || "",
        fullSite: selectedUser.status || "",
        company: selectedUser.additional_information || "",
      });
    }
  }, [selectedUser]);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    console.log("Updated ID:", userId);
    console.log("Updated Data:", formData);
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-xs underline text-green-600"
      >
        Edit
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
          </DialogHeader>

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />

          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />

          <input
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />
           <input
            name="fullSite"
            value={formData.fullSite}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />
           <input
            name="website"
            value={formData.company}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
          />

          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white p-2 w-full"
          >
            Update
          </button>
        </DialogContent>
      </Dialog>
    </>
  );
}