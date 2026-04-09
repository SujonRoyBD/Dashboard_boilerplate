"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Modal, Item } from "@/components/homepage/modal/Modal";

export const items = [
  { id: 1, title: "Item 1", variants: [
      { color: "yellow", img: "/images/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-12963.avif" },
      { color: "black", img: "/images/imageds.jpg" },
    ], price: "334", desc: "Description 1", img: "/images/images.jpg" },
  { id: 2, title: "Item 2", variants: [
      { color: "yellow", img: "/images/images.jpg" },
      { color: "black", img: "/images/images.jpg" },
    ], price: "334", desc: "Description 2", img: "/images/images.jpg" },
  { id: 3, title: "Item 3", variants: [
      { color: "yellow", img: "/images/images.jpg" },
      { color: "black", img: "/images/images.jpg" },
    ], price: "334", desc: "Description 3", img: "/images/images.jpg" },
  { id: 4, title: "Item 4", variants: [
      { color: "yellow", img: "/images/images.jpg" },
      { color: "black", img: "/images/images.jpg" },
    ], price: "334", desc: "Description 4", img: "/images/images.jpg" },
  { id: 5, title: "Item 5", variants: [
      { color: "yellow", img: "/images/images.jpg" },
      { color: "black", img: "/images/images.jpg" },
    ], price: "334", desc: "Description 5", img: "/images/images.jpg" },
  { id: 6, title: "Item 6", variants: [
      { color: "yellow", img: "/images/images.jpg" },
      { color: "black", img: "/images/images.jpg" },
    ], price: "334", desc: "Description 6", img: "/images/images.jpg" },
];

export default function HomePage() {
  const [data, setData] = useState(items);
  const [selectId, setSelectId] = useState<number | null>(null);

  const selectedItem = data.find((item) => item.id === selectId);

  const handleUpdate = (updatedItem: Item) => {
    const newData = data.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setData(newData);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {data.map((item) => (
        <div key={item.id} className="border p-4 flex flex-col gap-2">
          <Image
            src={item.img}
            alt={item.title}
            width={200}
            height={100}
            className="w-full"
          />
          <p>{item.title}</p>
          <p>{item.price}</p>
          <p>{item.desc}</p>

          <Link
            href={`/practise/${item.id}`}
            className="bg-indigo-900 text-white px-2 py-1 rounded mt-2 text-sm text-center"
          >
            View Details
          </Link>

          <button
            onClick={() => setSelectId(item.id)}
            className="bg-indigo-900 text-white px-2 py-1 rounded mt-2 text-sm text-center"
          >
            Update
          </button>
        </div>
      ))}

      {/* Modal */}
      {selectedItem && (
        <Modal
          item={selectedItem}
          onClose={() => setSelectId(null)}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
}