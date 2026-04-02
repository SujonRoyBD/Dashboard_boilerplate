"use client";

import { useGetUserQuery } from "@/redux/features/auth/authApi";

export default function Page() {
  const { data, error, isLoading } = useGetUserQuery({});

  console.log(data, error, isLoading);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div className="">
      {data?.map((user: any) => (
       <div className="flex flex-row gap-9 " key={user.id}>
         <p  className="flex gap-9 justify-between space-between border">{user.id}
       <div className="flex justify-between gap-9">
         <p>{user.email}</p>
        <p>{user?.address?.street}</p>
       </div>

        
        </p>
       </div>
      ))}
    </div>
  );
}