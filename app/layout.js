import Header from "@/app/_components/header/Header"
import "./globals.css"
import { Providers } from "./providers"
import Footer from "./_components/footer/Footer";

export const metadata = {
  title: "Amader Doctor - Doctor Appoinment Solution",
  description: "Thakurgaon Doctor Appoinment Solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='font-bangla'>
        <Providers>
          <Header />
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
