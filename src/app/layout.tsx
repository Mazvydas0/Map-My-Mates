import "./globals.css";
import { Inter } from "next/font/google";
import { StateContext } from "@/lib/contextProvider";
import { Toaster } from "react-hot-toast";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MapMyMate",
  description: "Social network for keeping your international friends close, reuniting with them in upcoming events !",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <StateContext>{children}</StateContext>
      </body>
    </html>
  );
}
