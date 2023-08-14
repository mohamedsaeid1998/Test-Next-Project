import Link from 'next/link';
import React from 'react'

const  page = async () => {

  const response = await fetch("https://jsonplaceholder.typicode.com/posts",
  {
    next:{
      revalidate:120,
    },
  }
  )
const posts = await response.json();

console.log(posts);

const postJsx = posts.map((post)=>{
  return <div style={{
    width:"70%",
    background:"white",
    padding:"10px",
    borderRadius:'10px',
    color:"black",
    marginTop:"20px"
  }}>
    <Link href={`./posts/${post.id}`}>
    <h1>{post.title}</h1>
    </Link>
    <p>{post.body}</p>
  </div>
})

  return <>
    <h1 className="text-2xl bg-orange-400 font-bold underline text-red-800">
      Hello world!
    </h1>
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column"
    }}>
      {postJsx}
    </div>
 </>
}

export default page