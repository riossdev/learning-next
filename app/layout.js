import Navbar from "../components/Nabvar"
import { Ubuntu } from "next/font/google" 

export const metadata = {
  title: "First-app",
  descriptions: "This is my first-app whit next"
}

const ubuntu = Ubuntu({
  style: ["300", "500", "700"],
  subsets: ["latin"]

})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
