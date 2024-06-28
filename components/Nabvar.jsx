import Link from "next/link"
import "./Navbar.css"

const Navbar = () =>{
  return(
    <nav className="navbar">
     <Link href='/' className="text-3xl p-8"> <h3>Next js Curso</h3></Link>
      <ul className="p-8 ">
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About Us</Link>
        </li>
        <li>
          <Link href='/store'>Store</Link>
        </li>
        <li>
          <Link href='/post'>Posts</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar