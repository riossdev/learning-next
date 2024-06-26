import Link from "next/link"

const NotFounfPage = () =>{
  return(
    <div>
      <h2>- 404</h2>
      <h3>Page not-found</h3>
      <Link href='/'>Go home</Link>
    </div>
  )
}

export default NotFounfPage