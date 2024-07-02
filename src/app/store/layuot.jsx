import Link from "next/link"

const Nav = () =>{
  return(
    <nav>
      <ul>
        <li>
          <Link href='/store/laptop'>laptop</Link>
        </li>
        <li>
          <Link href='/store/phones'>Phones</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav