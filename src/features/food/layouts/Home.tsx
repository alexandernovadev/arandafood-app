import React from 'react'
import { Banner } from '../components/Banner'
import { CardsOptionList } from '../components/CardsOptionList'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { RecipeceMain } from '../components/RecipeceMain'

export const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <CardsOptionList/>
      <RecipeceMain/>
      <Footer/>
      
    </div>
  )
}
