import { getCategories } from "@/services/categories";
import Link from "next/link";

export default async function SsrRenderedContent() {
  const categories = await getCategories();

  return (
    <section className="flex justify-items-center gap-x-2">
      {categories.map(({ id, title }) => (
        <Link
          key={id}
          href={`categories/${id}`}
          className="border p-1 flex items-center justify-center w-full rounded-md hover:bg-gray-200 duration-200 "
        >
          {title}
        </Link>
      ))}
    </section>
  );
}
