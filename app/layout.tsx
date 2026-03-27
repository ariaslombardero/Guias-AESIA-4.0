import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Guías AESIA 4.0 | José Antonio Arias",
  description: "Curso de formación interactiva sobre la Regulación y Uso de la IA. Un proyecto desarrollado con Vibe Coding por José Antonio Arias.",
  authors: [{ name: "José Antonio Arias" }],
  keywords: ["IA", "AESIA", "Formación", "Vibe Coding", "José Antonio Arias", "Regulación", "Sandbox Español"],
  openGraph: {
    title: "Guías AESIA 4.0 | José Antonio Arias",
    description: "Curso de formación interactiva sobre la Regulación y Uso de la IA. Un proyecto desarrollado con Vibe Coding por José Antonio Arias.",
    siteName: "Guías AESIA 4.0",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Thumbnail de Guías AESIA 4.0",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guías AESIA 4.0 | José Antonio Arias",
    description: "Curso de formación interactiva sobre la Regulación y Uso de la IA. Un proyecto desarrollado con Vibe Coding por José Antonio Arias.",
    images: ["/thumbnail.png"],
  },
};

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ScrollToTop } from "@/components/ScrollToTop";

// Script inline para evitar flash (se ejecuta antes del primer render)
const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || 'dark';
    document.documentElement.classList.add(theme);
    if (theme !== 'dark') document.documentElement.classList.remove('dark');
    else document.documentElement.classList.add('dark'); // Refuerzo para asegurar que 'dark' está presente
  } catch(e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${outfit.variable} antialiased min-h-screen`} suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider>
            <div className="fixed inset-0 pointer-events-none -z-10 transition-opacity duration-500" />
            <Navbar />
            {children}
            <Footer />
            <ScrollToTop />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
