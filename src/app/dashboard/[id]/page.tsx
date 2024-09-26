import { API_URL } from "@/config/apiUrl";
import { IUser } from "@/types/entity";
import React from "react";
import { EditUserForm } from "../components/edituser.form";
import { Header } from "@/components/shared/header";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function UserSinglePage({
  params,
}: {
  params: { id: string };
}) {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  const res = await fetch(`${API_URL}/users/${params.id}`);
  const data = (await res.json()) as IUser;

  return (
    <>
      <Header />
      <div className="flex justify-center items-center bg-yellow-100 min-h-screen">
        <div className="flex items-center gap-8">
          <div className="bg-blue-500 p-6 rounded-md border-2 border-black [box-shadow:5px_5px_black]">
            <h1>
              {data.firstName} {data.lastName}
            </h1>
            <p>
              <span className="font-semibold">First Name : </span>
              {data.firstName}
            </p>
            <p>
              <span className="font-semibold">Last Name : </span>
              {data.lastName}
            </p>
            <p>
              <span className="font-semibold">Gender : </span>
              {data.gender}
            </p>
            <p>
              <span className="font-semibold">Age : </span>
              {data.age}
            </p>
          </div>
          <EditUserForm user={data} />
        </div>
      </div>
    </>
  );
}
