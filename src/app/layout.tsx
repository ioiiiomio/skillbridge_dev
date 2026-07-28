import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://skillbridge.kz"),
  title: "SkillBridge KZ — Безопасный путь от образования к трудоустройству",
  description:
    "SkillBridge KZ помогает студентам колледжей безопасно находить практику, стажировки и первую работу у проверенных работодателей.",
  icons: {
    icon: "/brand/icon-32.png",
    apple: "/brand/icon-180.png",
  },
  openGraph: {
    title: "SkillBridge KZ",
    description: "Безопасный путь от образования к трудоустройству.",
    locale: "ru_KZ",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B5FFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
