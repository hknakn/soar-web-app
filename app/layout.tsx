import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import { DashboardLayout } from "./components/layout/DashboardLayout";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: "Soar Task",
  description: "Financial Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.variable}>
      <body className={inter.className}>
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}
