import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function loading() {
  return (
    <section className="flex justify-between gap-x-2">
      {[0, 1, 2, 3].map((id) => (
        <Skeleton key={id} width={84} height={32} />
      ))}
    </section>
  );
}
