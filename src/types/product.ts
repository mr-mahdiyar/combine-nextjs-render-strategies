import { type StaticImageData } from "next/image";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string | StaticImageData;
}
