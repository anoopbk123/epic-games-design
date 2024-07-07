import React from 'react'

export default function Card({text, image}) {
  return (
    <div className='card'>
      <figure>
        <img  className='image-fluid' src={image} alt="" />
        <figcaption className='mt-1'>
            {text}
        </figcaption>
      </figure>
    </div>
  )
}
