"use client";

import { getProducts } from "@/services/product";
import { useQuery } from "@tanstack/react-query";

export function useProducts() {

  const { isFetching, data } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  
  return { products: data, isProductsFetching: isFetching };
}
