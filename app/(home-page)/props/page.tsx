import React from 'react'
import Children from './children'

const services =[
    {
        id:1,
        service_Name:"salon beauty",
        service_Description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
        price:399,
        quantity:1
    },
    {
        id: 2,
        service_Name: "salon beauty",
        service_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
        price: 399,
        quantity: 1
    },
    {
        id: 3,
        service_Name: "salon beauty",
        service_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
        price: 399,
        quantity: 1
    },
]
export default function page() {
  return (
    <div className='mt-40 px-20'>
      
      <Children item={services}/>
    </div>
  )
}
