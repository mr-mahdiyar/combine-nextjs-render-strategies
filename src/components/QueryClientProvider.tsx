"use client";

import { QueryClient, QueryClientProvider as TanstackQueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

export default function QueryClientProvider({ children }: PropsWithChildren) {

  const client = new QueryClient();
  
  return <TanstackQueryClientProvider client={client}>{children}</TanstackQueryClientProvider>;
}
