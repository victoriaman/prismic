import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Viewport } from "next";

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: 'red',
  }

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <Header></Header>
            {children} 
            <Footer />
        </main>
    );
}
