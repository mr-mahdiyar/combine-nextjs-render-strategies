import { type ReactNode } from "react";
import "./globals.css";
import QueryClientProvider from "@/components/QueryClientProvider";

export default function RootLayout({
  children,
  ssg,
  ssr,
}: Readonly<{
  children: ReactNode;
  ssr: ReactNode;
  ssg: ReactNode;
}>) {
  return (
    <html>
      <body className="max-w-sm mx-auto">
        <QueryClientProvider>
          {ssg}
          {ssr}
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
