import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Geologica } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const geo = Geologica({
  subsets: ['latin'],
  weight: "400",
  display: 'swap',
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "FinTrack",
  description: "Finance Tracker with AI Advisor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        appearance={{
          layout: {
            logoImageUrl: '/icons/fintrack_logo.svg',
            socialButtonsVariant: 'iconButton'
          },
          variables: {
            colorBackground: '#fff',
          }
        }}>

        <body
          className={`${geo.className} antialiased `}>
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html >
  );
}
