import Hero from '@/views/Hero'
import ProductList from '@/views/ProductList'
import Image from 'next/image'


export default function Home() {
  return (
  <div className='background-color: #313131 m-6'>
    <Hero/>
    <ProductList/>
  </div>
  )
}
