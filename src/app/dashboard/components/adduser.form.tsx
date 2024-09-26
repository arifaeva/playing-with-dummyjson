"use client";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import React, { useActionState } from "react";
import { addUserAction } from "./adduser.action";

export default function UserForm() {
  const [state, formAction, pending] = useActionState(addUserAction, null);

  return (
    <div className="bg-purple-500 p-6 [box-shadow:5px_5px_black] rounded-md border-2 border-black flex flex-col gap-6">
      <h1 className="text-3xl">Add new user here!</h1>
      <form action={formAction} className="flex flex-col gap-4">
        {/* <Input value={Math.random()} name="id" type="hidden" required /> */}
        <Input placeholder="First Name" type="text" name="firstName" required />
        <Input placeholder="Last Name" type="text" name="lastName" required />
        <Input placeholder="Age" type="number" min="1" name="age" required />
        <select
          required
          name="gender"
          className="block w-full rounded-md border border-slate-200 bg-white px-6 py-3 focus:outline-none focus:border-2 focus:border-black transition duration-200 placeholder:font-normal font-normal"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <Button disabled={pending} variant="tertiary">
          Add New User
        </Button>
        {state?.status === 201 && (
          <p className="text-black">{state?.message}</p>
        )}
      </form>
    </div>
  );
}
