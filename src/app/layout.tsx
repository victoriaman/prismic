import type { Metadata } from "next";
import { Nunito , Nunito_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { createClient, repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";
import { after } from "next/server";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap"
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap"
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("settings");
 
  return {
    title: page.data.site_title || 'Flowrise titel fallback',
    description: page.data.meta_description || 'Flowrise description fallback',
    openGraph: {
      images: [page.data.og_image.url || '']
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  after(() => {
    // Execute after the layout is rendered and sent to the user
    console.log("RootLayout rendered successfully");
    // You can perform any additional actions here, such as logging or analytics
  })
  
  return (
    <html lang="en" className={clsx(nunito.className, nunitoSans.className)}>
      <body>
        {children}
        <div className="fixed bg-gradient-to-tr from-emerald-50 to-cyan-50 z-[-1]
          inset-0 opacity-50" />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}