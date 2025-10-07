"use client";

import Product from "@/components/Product";

import { useProducts } from "@/hooks/useProducts";
import Skeleton from "react-loading-skeleton";

export default function CsrRenderedContent() {
  const { isProductsFetching, products } = useProducts();

  if (isProductsFetching)
    return (
      <section className="grid grid-cols-2 gap-4 mt-8">
        {[0, 1, 2, 3].map((id) => (
          <Skeleton key={id} width={182} height={152} />
        ))}
      </section>
    );

  return (
    <section className="grid grid-cols-2 gap-4 mt-8">
      {products?.map(({ id, ...props }) => (
        <Product key={id} {...props} />
      ))}
    </section>
  );
}
