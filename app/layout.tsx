import Header from "@/components/header";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title> MP-4 | CS391 </title>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
