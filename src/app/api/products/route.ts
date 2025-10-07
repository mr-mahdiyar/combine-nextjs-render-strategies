import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    { id: 0, name: "Shirt", price: 7, image: "/shirt.jpg" },
    { id: 1, name: "Carpet", price: 120, image: "/carpet.jpg" },
    { id: 2, name: "Cream", price: 4, image: "/cream.jpg" },
    { id: 3, name: "Iphone 17", price: 3600, image: "/Iphon17.webp" },
  ];
  return NextResponse.json(products);
}
