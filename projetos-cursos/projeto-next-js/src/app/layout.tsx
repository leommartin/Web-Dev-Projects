import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/header';
// import { Header } from "../components/header";


// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// Root Layout: é o layout raiz da aplicação

export const metadata: Metadata = {
  title: "Meu site com Next.js",
  description: "Site completo para aprender Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        <Header /> { /* Necessário fazer o import do componente */}

        { /* Renderiza a página da aplicação (Home, contatos, repositorios) */}
        {children}

        {/* <footer>
          <span>Rodapé</span>
        </footer> */}
        
      </body>
    </html>
  );
}
