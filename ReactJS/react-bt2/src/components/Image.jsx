import React from 'react'

export default function Image({img,id}) {
  return (
    <div className='image' style={{backgroundImage:`url(${img})`}} >
      <div className='del-btn'></div>
    </div>
  )
}
