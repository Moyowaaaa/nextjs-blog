import React from 'react'
import PostItem from './PostItem'
import articleStyles from "../styles/Article.module.css"
import ArticleItem from './ArticleItem'

const JsonPost = ({posts}) => {
  return (
    <div className={articleStyles.grid}>
        {posts.map((post) => (
            <PostItem key={post.id} post={post} />
        ))}
    </div>
  )
}

export default JsonPost