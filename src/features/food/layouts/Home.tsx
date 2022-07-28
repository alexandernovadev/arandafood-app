import React from 'react'
import { Banner } from '../components/Banner'
import { CardsOptionList } from '../components/CardsOptionList'
import { Header } from '../components/Header'

import da from '../../../assets/icons/ic_chef.svg'
export const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <CardsOptionList/>
    </div>
  )
}
