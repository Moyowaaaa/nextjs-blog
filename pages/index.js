import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import ArticleList from '../components/ArticleList'
import JsonPost from '../components/JsonPost'
import { server } from '../config'


export default function Home({articles, posts}) {

   
  return (
    <div >

      <Head>
        <title>WebDEV</title>
        
      </Head>

      <ArticleList articles={articles}  />


      <JsonPost  posts={posts} />
         </div>
  )
}

// export const getMoreStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const posts = await res.json()

//   return{
//     props:{
//      posts
//     }
//   }
// }


export const getStaticProps = async () => {

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  const posts = await response.json()

  

  return{
    props:{
      articles,
      posts
    }
  }
}