import type { Product } from "@/types/product";
import Image from "next/image";
import React from "react";

export default function Product({ image, name, price }: Omit<Product, "id">) {
  return (
    <section className="flex flex-col items-center gap-y-2 border rounded-md py-2">
      <section className="p-2 max-w-20">
        <Image src={image} alt={name} width={500} height={500}/>
      </section>
      <h1>{name}</h1>
      <p>{price}$</p>
    </section>
  );
}
