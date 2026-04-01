"use client";

import UpdateModal from "./UpdataModal";
import ViewModal from "./ViewModal";
const services = [
    {
        id: 1,
        service_Name: "salon beauty",
        service_Description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
        price: 399,
        quantity: 1,
    },
    {
        id: 2,
        service_Name: "salon ee",
        service_Description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
        price: 399,
        quantity: 1,
    },
    {
        id: 3,
        service_Name: "salon yy",
        service_Description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
        price: 399,
        quantity: 1,
    },
];

export default function Children({item}:any) {
    return (
        <div className="flex gap-6 pb-8">
            {services.map((el) => (
                <div key={el.id} className="border p-3 rounded">
                    <h2>{el.service_Name}</h2>
                    <h1>{el.service_Description}</h1>
                    <h3>Qty: {el.quantity}</h3>
                    <p> {el.price}</p>

                    <div className="flex gap-4 mt-2">
                        <ViewModal service={el} />
                        <UpdateModal service={el} />
                    </div>
                </div>
            ))}
        </div>
    );
}