import Navbar from "../components/Nabvar";
import { Ubuntu } from "next/font/google";
import "./globals.css"

export const metadata = {
  title: "First-app",
  descriptions: "This is my first-app whit next",
};

const ubuntu = Ubuntu({
  weight: ["300", "500"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ubuntu.className}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
