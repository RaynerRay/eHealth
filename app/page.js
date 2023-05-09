import Featured from '@/components/Featured'
import Hero from '@/components/Hero'
import AddProduct from '@/components/AddProduct'
import axios from 'axios'

const getProducts = async () => {
  const data  = await axios.get('http://localhost:3000/api/products');
  return data
}

export default async function Home() {

  const data2 = await getProducts()
  return (
    <div>
      {console.log(data2)}
      <Hero />
      {/* <Featured /> */}
      <AddProduct />
    </div>
  )
}
