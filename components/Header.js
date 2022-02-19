import React from 'react'
import headerStyles from "../styles/header.module.css"

const Header = () => {
  return (
    <div>
        <h1 className={headerStyles.title}><span>Latest Posts</span></h1>
    </div>
  )
}

export default Header