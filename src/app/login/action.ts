"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import z from "zod";

import { API_URL } from "@/config/apiUrl";

const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export async function loginAction(prevState: unknown, formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  console.log({ username, password });

  const validation = loginSchema.safeParse({ username, password });

  if (!validation.success) {
    return {
      status: "error",
      errors: validation.error.flatten().fieldErrors,
      data: {
        username,
        password,
      },
    };
  }

  const res = await fetch(`${API_URL}/user/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  const data = await res.json();
  console.log(data);

  if (data.message === "Invalid credentials") {
    return {
      status: "error",
      message: data.message,
    };
  } else {
    cookies().set("token", data.accessToken);
    // Setting other data than token into cookies is actually not best practice, but I'm doing it because we don't have any JWT_SECRET value
    cookies().set("username", data.username);
    cookies().set("email", data.email);
    cookies().set("firstName", data.firstName);
    cookies().set("lastName", data.lastName);
    cookies().set("gender", data.gender);
    cookies().set("image", data.image);

    revalidatePath("/dashboard");
    redirect("/dashboard");
  }
}
