import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

import { ClerkProvider, SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import { ModalProvider } from "@/providers/modal-provider";
import { ToasterProvider } from "@/providers/toast-provider";
// import db from "@/lib/db";
// UserButton

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sinau dodolan",
  description: "Le Nggawe nanggo Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <ToasterProvider />
          <ModalProvider />
          <main>
            <SignedOut>
              <div className="flex justify-center items-center">
                <div className="flex justify-center items-center mt-20">
                  <SignIn routing="hash" />
                </div>
              </div>
            </SignedOut>
            <SignedIn>{children}</SignedIn>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
