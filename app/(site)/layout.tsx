
"use client";

import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import { ThemeProvider } from "next-themes";
import "@/app/globals.css";
import "@/app/prosemirror.css";
import ToasterContext from "@/app/context/ToastContext";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import { Toaster } from "sonner";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  const isHiddenPath = pathname.startsWith("/admin") || 
    pathname.startsWith("/mda") || 
    pathname.startsWith("/staff") || 
    pathname.startsWith("/reform_champion") || 
    pathname.startsWith("/deputies") || 
    pathname.startsWith("/magistrates") || 
    pathname.startsWith("/state_governor") ||
    pathname.startsWith("/vice_president") ||
    pathname.startsWith("/president") || 
    pathname.startsWith("/saber_agent");

  return (
    <ClerkProvider>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <html lang="en" suppressHydrationWarning>
          <body className={`dark:bg-white ${inter.className}`}>
            <ThemeProvider enableSystem={false} attribute="class" defaultTheme="light">
              {!isHiddenPath && <Lines />}
              {!isHiddenPath && <Header />}
              <Toaster position="top-center" richColors />
              <main>
                {children}
              </main>
              {!isHiddenPath && <Footer />}
            </ThemeProvider>
          </body>
        </html>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
