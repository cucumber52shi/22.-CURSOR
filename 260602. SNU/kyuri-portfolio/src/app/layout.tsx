import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "정규리 | National Policy Researcher",
  description:
    "도시정책과 환경정책을 연결하는 국책연구원 정규리의 포트폴리오 — GIS, 공간 분석, 녹지 접근성 정책 연구",
  openGraph: {
    title: "정규리 | National Policy Researcher",
    description: "Urban green policy research portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${montserrat.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white font-sans text-zinc-900 antialiased">{children}</body>
    </html>
  );
}
