import { GeistSans as FontSans } from 'geist/font/sans';
import { Metadata } from 'next';
import "./globals.css";

export const metadata: Metadata = {
  title: "Globex Shipping",
  description: "Home for all your shipping needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='h-full'> 
      <body className={`${FontSans.className} h-full`}>
      {children}
      </body>
    </html>
  );
}
