import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const Documents = () => {
  return (
    <div>
      <Header />
      <h1>document</h1>

      <Footer className="absolute w-full bottom-0"/>
    </div>
  )
}
