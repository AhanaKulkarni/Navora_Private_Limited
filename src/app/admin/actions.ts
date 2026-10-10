"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  
  const validEmails = ["roohi@maritimesolutionsltd.com", "ahanak@aetheronai.in"];

  if (validEmails.includes(email) && password === "admin@2026") {
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
