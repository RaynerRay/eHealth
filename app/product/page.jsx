import Filters from '@/components/layouts/Filters'
import CompanyListItem from '@/components/products/CompanyListItem'
import axios from 'axios';
import React from 'react'

import queryString from 'query-string';

const getProducts = async (searchParams) => {

  const urlParams = {
    keyword: searchParams.keyword
  }

  const searchQuery = queryString.stringify(urlParams)
  console.log(searchQuery)
  const {data}  = await axios.get(`http://localhost:3000/api/products?${searchQuery}`);
  return data
}

const index = async ({searchParams}) => {
  const data2 = await getProducts(searchParams)
  console.log(data2)
  return (
    <div className='flex bg-gray-200 p-4 items-center pl-32'>
      {/* <Filters /> */}
      <div className="">
        {data2?.products.map(company => (
          <CompanyListItem key={company._id} company={company} />
        ))}
      </div>
      
    </div>
  )
}

export default index