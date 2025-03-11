import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const dana = localFont({
  src: [
    { path: "/fonts/Dana-Thin.ttf", weight: "100", style: "normal" },
    { path: "/fonts/Dana-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "/fonts/Dana-Light.ttf", weight: "300", style: "normal" },
    { path: "/fonts/Dana-Regular.ttf", weight: "400", style: "normal" },
    { path: "/fonts/Dana-Medium.ttf", weight: "500", style: "normal" },
    { path: "/fonts/Dana-DemiBold.ttf", weight: "600", style: "normal" },
    { path: "/fonts/Dana-Bold.ttf", weight: "700", style: "normal" },
    { path: "/fonts/Dana-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "/fonts/Dana-Black.ttf", weight: "900", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "مکتب",
  description: "مکتب، پلتفرمی برای امانت آنلاین کتاب",
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  return (
    <html lang='fa' dir='rtl'>
      <SessionProvider session={session}>
        <body className={`${dana.className} antialiased`}>
          {children}
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
};

export default RootLayout;
