import React from 'react'
import TopnBar from '../Home/TopnBar'
import Abhero from './Abhero'
import BannerH from './BannerH'
import BannerBar from './BannerBar'
import Join from '../Home/Join'
import Brandes from '../Home/Brandes'
import Navsecond from '../Home/Navsecond'
import FooterS from '../Footer/FooterS'

const page = () => {
  return (
    <div>
      <div>
        <TopnBar/>
        <Navsecond/>
        <Abhero/>
        <BannerH/>
        <BannerBar/>
        <Brandes/>
        <Join/>
        <FooterS/>
        <div>
            
        </div>
      </div>
    </div>
  )
}

export default page
