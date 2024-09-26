import { Header } from "@/components/shared/header";
import { UserCard } from "./components/user.card";
import { API_URL } from "@/config/apiUrl";
import { IUser } from "@/types/entity";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import UserForm from "./components/adduser.form";
import { SortButton } from "./components/button.sort";

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: { q: string; order: string };
}) {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  const query = searchParams.q;
  const sortOrder = searchParams.order;

  async function getUsers(query: string, sortOrder: string) {
    if (query) {
      const res = await fetch(`${API_URL}/users/search?q=${query}`);
      const data = await res.json();
      const users = data.users;
      return users;
    }
    if (sortOrder) {
      const res = await fetch(
        `${API_URL}/users?sortBy=firstName&order=${sortOrder}`
      );
      const data = await res.json();
      const users = data.users;
      return users;
    }
    {
      const res = await fetch(`${API_URL}/users`);
      const data = await res.json();
      const users = data.users as IUser[];
      return users;
    }
  }

  const users = (await getUsers(query, sortOrder)) as IUser[];

  return (
    <div className="bg-yellow-100 min-h-screen mt-14">
      <Header />
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center gap-12 max-w-[1280px] w-full p-16">
          <UserForm />
          <div className="flex flex-col items-center gap-8 rounded-md border-2 border-black p-8 [box-shadow:5px_5px_black]">
            <h2 className="text-center">User List</h2>
            <SortButton />
            <div className=" grid grid-cols-3 gap-8">
              {users.map((user) => {
                return <UserCard key={user.id} user={user} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
