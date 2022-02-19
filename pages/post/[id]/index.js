import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

const post = ({post}) => {
  return (
    <>
     <h1>{post.title}</h1>

    <p>{post.body}</p>
    <br/>

    <Link href="/">Go back</Link>
    </>
  )
}

export const getServerSideProps = async(context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    
    const post = await res.json()

    return{
        props: {
            post
        }
    }
}


export default post