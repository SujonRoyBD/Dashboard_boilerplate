"use client";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";

export default function Navbar() {
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <div className="p-4 bg-black text-white flex justify-between">
      <h1>My App</h1>

      {/* Cart Count */}
      <Link href="/cartPage"><p>Cart: {cartItems.length}</p></Link>
    </div>
  );
}