import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Task",
  description: "Simple client-side auth system with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body
        dir="rtl"
        className="min-h-screen bg-gray-50 flex items-center justify-center"
      >
        {children}
      </body>
    </html>
  );
}
