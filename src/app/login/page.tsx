"use client";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import React, { useActionState } from "react";
import { loginAction } from "./action";

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(loginAction, null);
  // console.log(state);

  return (
    <div className="min-h-screen flex justify-center items-center bg-yellow-100">
      <div className="bg-sky-500 [box-shadow:5px_5px_black] border-2 border-black w-[400px] p-6 flex flex-col gap-4 rounded-md">
        <div className="flex flex-col gap-2">
          <h1>Sign in</h1>
          <p>Sign in to get full access!</p>
        </div>
        <form action={formAction} className="flex flex-col gap-4">
          <Input placeholder="username" name="username" type="text" required />
          <Input
            placeholder="password"
            name="password"
            type="password"
            required
          />
          <Button disabled={pending}>Sign in</Button>
          {state?.status === "error" && (
              <p className="text-rose-400">{state?.message}</p>
            ) && (
              <div
                id="alert-1"
                className="flex items-center p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
                role="alert"
              >
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <div className="ms-3 text-sm font-medium">
                  {state?.message}. Your username or password is incorrect.
                  Please try again.
                </div>
              </div>
            )}
        </form>
      </div>
    </div>
  );
}
