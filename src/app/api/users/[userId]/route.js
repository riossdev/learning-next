import {  NextResponse } from "next/server"

export async function GET(resquest, {params}){
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
  const data = await res.json()
  return NextResponse.json(data)
}

 