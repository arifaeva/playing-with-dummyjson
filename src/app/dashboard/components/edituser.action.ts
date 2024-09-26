"use server";

import { API_URL } from "@/config/apiUrl";

export async function editUserAction(prevState: unknown, formData: FormData) {
  const id = parseInt(formData.get("id") as string, 10);
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const age = parseInt(formData.get("age") as string, 10);
  const gender = formData.get("gender") as string;

  console.log({ id, firstName, lastName, age, gender });

  const res = await fetch(`${API_URL}/users/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ firstName, lastName, age, gender }),
  });

  const data = await res.json();
  console.log(data);
  console.log("Response status:", res.status);

  if (res.status === 200) {
    return {
      status: res.status,
      message: "User data has been successfully updated.",
    };
  }
}
