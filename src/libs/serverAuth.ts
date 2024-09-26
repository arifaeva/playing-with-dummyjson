// This is the version of serverAuth() if we have JWT_SECRET

// import jwt from "jsonwebtoken";
// import { cookies } from "next/headers";

// export function serverAuth() {
//   const cookieStore = cookies();
//   const token = cookieStore.get("accessToken")?.value;

//   if (!token) {
//     return null;
//   }

//   try {
//     const user = jwt.verify(token, process.env.JWT_SECRET as string);
//     return user as {
//       id: number;
//       username: string;
//       email: string;
//       firstName: string;
//       lastName: string;
//       gender: string;
//       image: string;
//     };
//   } catch (error) {
//     return null;
//   }
// }

import { cookies } from "next/headers";

export function serverAuth() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  const username = cookieStore.get("username")?.value;
  const firstName = cookieStore.get("firstName")?.value;
  const lastName = cookieStore.get("lastName")?.value;
  const gender = cookieStore.get("gender")?.value;
  const image = cookieStore.get("image")?.value;

  if (!token) {
    return null;
  } else {
    const user = { username, firstName, lastName, gender, image };
    return user;
  }
}
