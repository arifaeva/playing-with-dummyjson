import { IUser } from "@/types/entity";
import React from "react";
import Link from "next/link";

export const UserCard = ({ user }: { user: IUser }) => {
  return (
    <div className="bg-blue-500 rounded-md [box-shadow:5px_5px_black] border-2 border-black p-3 flex justify-between items-center min-w-[300px]">
      <div>
        <p className="font-semibold">
          {user.firstName} {user.lastName}
        </p>
      </div>
      <Link href={`/dashboard/${user.id}`}>
        <button className="rounded-full bg-pink-500 text-black hover:bg-black hover:text-yellow-100 border-2 border-black px-2 py-1 text-sm font-semibold">
          More...
        </button>
      </Link>
    </div>
  );
};
