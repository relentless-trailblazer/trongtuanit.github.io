import React from 'react'

export default function Card({imgLink,content,children}) {
  return (
    <div className="card">
      <img src={imgLink} alt=""/>
      <div>
        {content}
      </div>
      {children}
    </div>
  )
}
