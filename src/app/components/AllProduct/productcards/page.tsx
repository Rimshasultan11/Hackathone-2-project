import React from 'react'
import Cards from '../../Home/Cards'
import p1 from '/public/p1.png'
import p2 from '/public/p2.png'
import p3 from '/public/p3.png'
import p4 from '/public/p4.png'
import p10 from '/public/p10.png'
import p11 from '/public/p11.png'
import p12 from '/public/p12.png'
import p13 from '/public/p13.png'
import Link from 'next/link'


const ProCards = () => {

  return (
    <div>

<div className='wrapper grid grid-cols-2 lg:grid-cols-4 gap-6'>
<Link  href={'/components/AllProduct/productcards/1'}>
 <Cards pic={p1} description='The Dandy chair' tittle='£250'/></Link>
 <Link  href={'/components/AllProduct/productcards/2'} >
  <Cards pic={p2} description='Rustic Vase Set' tittle='£155'/></Link>
  <Link  href={'/components/AllProduct/productcards/3'}><Cards pic={p3} description='The Silky Vase' tittle='£125'/></Link>
  <Link  href={'/components/AllProduct/productcards/4'}><Cards pic={p4}  description='The Lucy Lamp' tittle='£399'/></Link>
  <Link  href={'/components/AllProduct/productcards/5'}><Cards pic={p10} description='The Dandy chair' tittle='£250'/></Link>
  <Link  href={'/components/AllProduct/productcards/6'}><Cards pic={p11} description='Rustic Vase Set' tittle='£155'/></Link>
  <Link  href={'/components/AllProduct/productcards/7'}><Cards pic={p12} description='The Silky Vase' tittle='£125'/></Link>
  <Link  href={'/components/AllProduct/productcards/8'}><Cards pic={p13}  description='The Lucy Lamp' tittle='£399'/></Link>
  <Link  href={'/components/AllProduct/productcards/9'}><Cards pic={p1} description='The Dandy chair' tittle='£250'/></Link>
  <Link  href={'/components/AllProduct/productcards/10'}><Cards pic={p2} description='Rustic Vase Set' tittle='£155'/></Link>
  <Link  href={'/components/AllProduct/productcards/11'}><Cards pic={p3} description='The Silky Vase' tittle='£125'/></Link>
  <Link  href={'/components/AllProduct/productcards/12'}><Cards pic={p4}  description='The Lucy Lamp' tittle='£399'/></Link>
 
      </div>
      
      {/* <div className='wrapper  grid grid-cols-2 lg:grid-cols-4  gap-5'>
       {
        productList.map((data)=>(
          <Link 
         href={`/components/AllProduct/productcards/1`}

         > 
        
         <Cards key={data.id} pic={data.img} description={data.des} tittle={data.price} />
       
         </Link>
        ))
       }
      </div> */}

  <button className='text-[#2A254B] text-[16px] w-[170px] h-[56px] py-[16px] px-[32px] my-8 bg-[#F9F9F9] lg:mx-[550px]'>view All</button>

    </div>
  )
}

export default ProCards




