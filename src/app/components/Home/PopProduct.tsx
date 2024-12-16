import React from 'react'
import Tittle from './Tittle'
import Cards from './Cards'
import p5 from '/public/p5.png'
import p1 from '/public/p1.png'
import p6 from '/public/p6.png'
import Image from 'next/image'
import Grid from './Grid'
const PopProduct = () => {
  return (
    <div>
       <div className='wrapper bg-[#FFFFFF] mt-[70px] '>
        <Tittle tittle='Our popular products'/>
        <div className='flex gap-3 mt-5'>


     <div className='w-[900px] ml-8 hidden lg:block hover:bg-[#2A254B] text-[#2A254B] hover:text-white'> 
    <Image src={p5} alt='large ' className='w-[900px] hidden lg:block'/>
<div className=' leading-8'>
            <p>The Poplar suede sofa</p>
            <p>£980</p>
            
        </div>  
        </div> 
<Cards pic={p1} description='Rustic Vase Set' tittle='£155'/>
<Cards pic={p6} description='The Silky Vase' tittle='£125'/>
</div>
</div>
  <button className='mt-[60px] text-[#2A254B] text-[16px] w-[170px] h-[56px] py-[16px] px-[32px] bg-[#F9F9F9] lg:mx-[550px]'>view All</button>
  

    
      </div>
   
  )
}

export default PopProduct
