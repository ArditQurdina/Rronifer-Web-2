import "./globals.css";
import IntroProvider from "./components/IntroProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "./header";
import Footer from "./footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <IntroProvider>
            <Header />

            {children}

            <Footer />
          </IntroProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}