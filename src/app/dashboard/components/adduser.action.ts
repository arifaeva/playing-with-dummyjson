"use server";

import { API_URL } from "@/config/apiUrl";
import { revalidatePath } from "next/cache";

export async function addUserAction(prevState: unknown, formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const age = parseInt(formData.get("age") as string, 10);
  const gender = formData.get("gender") as string;

  console.log({ firstName, lastName, age, gender });

  const res = await fetch(`${API_URL}/users/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ firstName, lastName, age, gender }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Error response:", errorText);
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  console.log(data);
  console.log("Response status:", res.status);

  if (res.status === 201) {
    return {
      status: res.status,
      message: "A new user has been added",
    };
  }

  // const bodyData = new FormData();
  // bodyData.append("firstName", firstName);
  // bodyData.append("lastName", lastName);
  // bodyData.append("age", age);
  // bodyData.append("gender", gender);

  // try {
  //   const res = await fetch(`${API_URL}/users/add`, {
  //     method: "POST",
  //     body: bodyData,
  //   });

  //   const data = await res.json();
  //   console.log(data);
  // } catch (error) {
  //   console.log(error);
  //   return {
  //     message: "Error add new user",
  //   };
  // }

  revalidatePath("/dashboard");
}
