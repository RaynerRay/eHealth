import Featured from '@/components/Featured'
import Hero from '@/components/Hero'
import AddProduct from '@/components/AddProduct'
import axios from 'axios'



export default async function Home() {

  return (
    <div>
      <Hero />
      {/* <Featured /> */}
      <AddProduct />
    </div>
  )
}
