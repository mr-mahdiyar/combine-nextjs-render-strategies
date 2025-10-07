"use server";

import type { Category } from "@/types/category";

export async function getCategories(): Promise<Array<Category>> {
  const baseUrl = process.env.NEXT_PUBLIC_API || "http://localhost:3000/api";
  const categories = await fetch(`${baseUrl}/categories`, {
    cache: "no-cache",
  });
  const categoriesInJson = await categories.json();

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categoriesInJson);
    }, 1500);
  });
}
