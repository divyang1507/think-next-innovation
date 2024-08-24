import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Think Next Innovation",
  description: "Designed & Developed by Progrowth and Think Next Innovation | Brand, Design & Development Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div>{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
