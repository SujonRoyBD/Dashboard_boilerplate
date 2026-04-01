"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

export default function ViewModal({ service }:any) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button onClick={() => setOpen(true)}>View</button>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Service Details</DialogTitle>
                    </DialogHeader>

                    <div className="border p-2 mb-2">
                        <p>{service.service_Name}</p>
                        <p>{service.service_Description}</p>
                        <p> {service.price}</p>
                        <p>Qty: {service.quantity}</p>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}