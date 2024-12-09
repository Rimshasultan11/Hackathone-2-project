"use client"
import Image from 'next/image'
import p1 from '/public/p1.png' // Replace with dynamic data
import p2 from '/public/p2.png'
const ProductDetails = () => {
 
  const products = {
    p1: {
      title: 'The Dandy chair',
      price: '£250',
      description: 'A stylish and modern chair.',
      image: p1,
    },
    p2: {
      title: 'Rustic Vase Set',
      price: '£155',
      description: 'Set of beautifully crafted rustic vases.',
      image: p2, 
    },
    
  }

  const product = products.p2 

  return (
    <div className="product-details m-auto">
      <h1 className='text-center'>Product Details</h1>
      <h1 className='text'>{product.title}</h1>
      <Image src={product.image} alt={product.title} width={300} height={300} />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  )
}

export default ProductDetails



