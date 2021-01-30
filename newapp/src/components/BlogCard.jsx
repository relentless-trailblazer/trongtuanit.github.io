import React from 'react'
import classes from '../modules/BlogCard.module.css'



export default function BlogCard({id, desc, title}) {
  return (
    <div className={classes.NewBlogCard}  key={id}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}
