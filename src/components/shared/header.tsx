import React from "react";
import { Button } from "../button";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SearchBox } from "./searchbox";

export const Header = () => {
  const cookieStore = cookies();
  const firstName = cookieStore.get("firstName")?.value;
  const lastName = cookieStore.get("lastName")?.value;

  async function handleSignOut() {
    "use server";
    cookies().delete("token");

    redirect("/");
  }

  return (
    <div>
      <header className="bg-yellow-100 flex justify-between items-center py-5 px-8 border-black border-b-2 fixed top-0 z-50 w-screen">
        <div className="flex gap-4 items-center">
          <Link href={"/dashboard"}>
            <h2 className="">
              Hello, {firstName} {lastName}!
            </h2>
          </Link>
          <SearchBox />
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
          <form action={handleSignOut}>
            <Button variant="secondary">Sign Out</Button>
          </form>
        </div>
      </header>
    </div>
  );
};
