"use client";

import { Input } from "@/components/input";
import { editUserAction } from "./edituser.action";
import { Button } from "@/components/button";
import { IUser } from "@/types/entity";
import { useActionState } from "react";

export const EditUserForm = ({ user }: { user: IUser }) => {
  const [state, formAction, pending] = useActionState(editUserAction, null);

  return (
    <div className="bg-purple-500 p-6 [box-shadow:5px_5px_black] rounded-md border-2 border-black flex flex-col gap-6">
      <h1 className="text-3xl">Edit Data User</h1>
      <form action={formAction} className="flex flex-col gap-4">
        <Input value={user.id} name="id" type="hidden" required />
        <Input
          placeholder="First Name"
          type="text"
          name="firstName"
          defaultValue={user.firstName}
          required
        />
        <Input
          placeholder="Last Name"
          type="text"
          name="lastName"
          defaultValue={user.lastName}
          required
        />
        <Input
          placeholder="Age"
          type="number"
          min="1"
          name="age"
          defaultValue={user.age}
          required
        />
        <select
          required
          name="gender"
          defaultValue={user.gender}
          className="block w-full rounded-md border border-slate-200 bg-white px-6 py-3 focus:outline-none focus:border-2 focus:border-black transition duration-200 placeholder:font-normal font-normal"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <Button disabled={pending} variant="tertiary">
          Update Data User
        </Button>
        {state?.status === 200 && (
          <p className="text-black text-center">
            {state?.message}.<br />
            Please check your terminal console.
          </p>
        )}
      </form>
    </div>
  );
};
