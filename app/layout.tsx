import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Virappan | Developer Portfolio",
  description: "Portfolio of Virappan — Computer Science student and software developer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
