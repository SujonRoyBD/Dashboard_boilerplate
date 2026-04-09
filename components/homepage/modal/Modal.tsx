"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export type Item = {
  id: number;
  title: string;
  price: string;
  desc: string;
  img: string;
  variants: { color: string; img: string }[];
};

type Props = {
  item: Item | undefined;
  onClose: () => void;
  onUpdate: (updatedItem: Item) => void;
};

export function Modal({ item, onClose, onUpdate }: Props) {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    desc: "",
  });

  useEffect(() => {
    if (item) {
      setFormData({
        title: item.title,
        price: item.price,
        desc: item.desc,
      });
    }
  }, [item]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (!item) return;

    onUpdate({
      ...item,
      title: formData.title,
      price: formData.price,
      desc: formData.desc,
    });

    toast.success("Item updated successfully!");
    onClose();
  };

  return (
    <Dialog open={!!item} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Edit Item</DialogTitle>
        </DialogHeader>

        <p className="text-sm text-gray-500">ID: {item?.id}</p>

        {/* Form */}
        <div className="flex flex-col gap-3 mt-3">
          <div>
            <Label>Title</Label>
            <Input name="title" value={formData.title} onChange={handleChange} />
          </div>
          <div>
            <Label>Price</Label>
            <Input name="price" value={formData.price} onChange={handleChange} />
          </div>
          <div>
            <Label>Description</Label>
            <Input name="desc" value={formData.desc} onChange={handleChange} />
          </div>
        </div>

        <DialogFooter className="mt-4 flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}