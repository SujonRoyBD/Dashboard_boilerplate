"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

export default function UpdateModal({ service }:any) {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({...service });
   

    const handleChange = (e:any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdate = () => {

        console.log("Updated:", formData);
        setOpen(false);
    };

    return (
        <>
            <button onClick={() => setOpen(true)}>Edit</button>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Service</DialogTitle>
                    </DialogHeader>

                    <input
                        name="service_Name"
                        value={formData.service_Name}
                        onChange={handleChange}
                        className="border p-2 w-full mb-2"
                    />

                    <input
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="border p-2 w-full mb-2"
                    />
                    <input
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="border p-2 w-full mb-2"
                    />
                    <input
                        name="service_Description"
                        value={formData.service_Description}
                        onChange={handleChange}
                        className="border p-2 w-full mb-2"
                    />
                  

                    <button
                        onClick={handleUpdate}
                        className="bg-blue-500 text-white p-2"
                    >
                        Update
                    </button>
                </DialogContent>
            </Dialog>
        </>
    );
}