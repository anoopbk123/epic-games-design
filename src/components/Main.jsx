import React from 'react'
import Cards from './Cards'
import Contribution from './Contribution'
import Contact from './Contact'

export default function Main() {
  return (
    <main className='text-center p-1 main'>
      <Cards/>
      <Contribution/>
      <Contact/>
    </main>
  )
}
