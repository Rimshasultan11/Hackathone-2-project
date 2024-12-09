import React from 'react'
import TopnBar from '../Home/TopnBar'
import ProductBar from './ProductBar'
import Navbar from '../Home/Navbar'
import Cardsbar from './Cardsbar'
import Brandes from '../Home/Brandes'
import Join from '../Home/Join'
import FooterS from '../Footer/FooterS'

const page = () => {
  return (
    <div>
      <TopnBar/>
      <Navbar/>
      <ProductBar/>
     <Cardsbar/>
     <Brandes/>
     <Join/>
     <FooterS/>
    </div>
  )
}

export default page
