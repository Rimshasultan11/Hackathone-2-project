import React from 'react'
import p1 from '/public/p1.png'
import p2 from '/public/p2.png'
import p3 from '/public/p3.png'
import p4 from '/public/p4.png'
import Grid from '../Home/Grid'
import Tittle from '../Home/Tittle'
import Cards from '../Home/Cards'
const Cardsbar = () => {
  return (
    <div>
      <div className='wrapper  mt-[70px] '>
        <Tittle tittle='You might also like'/>
        <Grid> 
<Cards pic={p1} description='The Dandy chair' tittle='£250'/>
<Cards pic={p2} description='Rustic Vase Set' tittle='£155'/>
<Cards pic={p3} description='The Silky Vase' tittle='£125'/>
<Cards pic={p4}  description='The Lucy Lamp' tittle='£399'/>
</Grid>
  <button className='text-[#2A254B] text-[14px] w-[170px] h-[56px] mb-5 py-[16px] px-[32px] bg-[#F9F9F9] lg:mx-[550px]'>view Callection</button>
      </div>
    </div>
  )
}

export default Cardsbar
