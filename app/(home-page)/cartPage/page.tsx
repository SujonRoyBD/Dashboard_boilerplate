"use client";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  incrementQty,
  decrementQty,
  removeFromCart,
} from "@/redux/cart/CartSlice";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  // total price
  const total = cartItems.reduce((sum, item) => {
    return sum + Number(item.price) * item.quantity;
  }, 0);

  if (cartItems.length === 0) {
    return <p className="p-6">Cart is empty</p>;
  }

  return (
    <div className="p-6">
     <div className="flex justify-between">
       <h1 className="text-2xl font-bold mb-4">Cart Page</h1>
       <Link href="/practise" className="text-blue-500 hover:underline">
         Continue Shopping
       </Link>
     </div>


      {cartItems.map((item) => (
        <div
          key={item.id}
          className="border p-4 mb-4 flex justify-between items-center"
        >
          <div className="flex gap-4 items-center">
            <Image src={item.img} alt={item.title} width={80} height={60} />
            <div>
              <p className="font-bold">{item.title}</p>
              <p>{item.price} </p>

              {/* Quantity Control */}
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => dispatch(decrementQty(item.id))}
                  className="bg-gray-300 px-2"
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => dispatch(incrementQty(item.id))}
                  className="bg-gray-300 px-2"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="bg-red-600 text-white px-3 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}

      {/* Total */}
      <h2 className="text-xl font-bold mt-6">
        Total: {total} 
      </h2>
    </div>
  );
}