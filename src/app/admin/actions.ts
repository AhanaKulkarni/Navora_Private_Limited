"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (email === "admin@navora.com" && password === "admin123") {
    const cookieStore = await cookies();
    cookieStore.set("admin_auth", "true", { httpOnly: true, secure: process.env.NODE_ENV === "production" });
    redirect("/admin");
  } else {
    return { error: "Invalid credentials" };
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_auth");
  redirect("/admin/login");
}
