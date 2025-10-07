"use server";

import { Product } from "@/types/product";

export async function getProducts(): Promise<Array<Product>> {
  const baseUrl = process.env.NEXT_PUBLIC_API || "http://localhost:3000/api";

  const products = await fetch(`${baseUrl}/products`, {
    cache: "no-cache",
  });

  const productsInJson = await products.json();

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsInJson);
    }, 2500);
  });
}
