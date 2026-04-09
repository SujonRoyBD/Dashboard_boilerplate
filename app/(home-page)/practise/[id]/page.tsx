"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { items } from "../page";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cart/CartSlice";

export default function ItemDetailsPage() {
  const params = useParams();
  const id = parseInt(
  Array.isArray(params.id) ? params.id[0] : params.id || "0"
);

  const item = items.find((i) => i.id === id);

  const dispatch = useDispatch();

  if (!item) return <p>Item not found</p>;

  return (
    <div className="p-6">
      <div className="border p-4 flex flex-col gap-4 max-w-md">
        <Image src={item.img} alt={item.title} width={300} height={150} />
        <p>{item.title}</p>
        <p>{item.price}</p>

        <button
          onClick={() => dispatch(addToCart(item))}
          className="bg-indigo-900 text-white px-3 py-1 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}