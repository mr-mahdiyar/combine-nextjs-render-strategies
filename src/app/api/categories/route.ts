import { NextResponse } from "next/server";

export async function GET() {
  
  const categories = [
    { id: 0, title: "Electronics" },
    { id: 1, title: "Clothing" },
    { id: 2, title: "Home" },
    { id: 3, title: "Beauty" },
  ];
  return NextResponse.json(categories);
}