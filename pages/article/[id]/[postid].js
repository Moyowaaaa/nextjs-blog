import React from 'react'
import Link from 'next/link'


const post = ({post}) => {
  return (
      <>
      <h1>{post.title}</h1>

      <p>{post.body}</p>
      </>
  )
}

export const getServerSideProps = async(context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    
    const article = await res.json()

    return{
        props: {
            article
        }
    }
}


export default post