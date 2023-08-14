import React from 'react'

const PostDetails = async({postId}) => {
  await new Promise ((resolve)=>{
    setTimeout(() => {
      resolve()
    }, 2000);
  })
  
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,
  {
    next:{
      revalidate:120,
    }
  })
  const post = await response.json()


  return <>

    <div style={{
          width:"70%",
          background:"white",
          padding:"10px",
          borderRadius:'10px',
          color:"black",
          margin:"auto",
          
    }}>
      <h1>
        {post.title}
      </h1>
      <p>
        {post.body}
      </p>

    </div>
    </>
}

export default PostDetails