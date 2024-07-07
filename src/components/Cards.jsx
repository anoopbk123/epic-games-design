import React from 'react'
import Card from './Card'
import cards from '../assets/cards-data'

export default function Cards() {
  return (
    <div className='card-container d-flex flex-wrap justify-center g-1'>
      {
        cards.map(card=>(
          <Card key={card.image} image={card.image} text={card.text} />
        ))
      }
    </div>
  )
}
