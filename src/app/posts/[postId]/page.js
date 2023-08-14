import PostDetails from '@/Components/PostDetails';
import React, { Suspense } from 'react'

const page = async ({params}) => {
  const postId = params.postId
  console.log(postId);


const loadingJsx=<div><h1 style={{color:"white"}}>Loading Here.....</h1></div>


  return <>
    <div style={{color:"white"}}>Post Details</div>
    <Suspense fallback={loadingJsx}>
      <PostDetails postId={postId}/>
    </Suspense>
  </>
}

export default page