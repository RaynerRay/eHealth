'use client'

import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { AiOutlinePhone } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';

const CompanyListItem = ({company}) => {
  
  return (
    <>
    <div className=" mb-6 max-w-3xl" >
       <div className="items-center bg-white  border border-slate-300 rounded-smshadow sm:flex dark:bg-gray-900 dark:border-gray-700">
         
            <div className="pl-2 hidden md:block">
            <Image
                src="/images/logo1.png"
                height="40"
                width="120"
                alt="Locallist logo"
              />
            </div>
            
            
            <div className="p-5">
              <div className='flex justify-between'> 
              <Link href={`/product/${company._id}`} className="link">
                
                <h3 className="text-lg font-bold tracking-wide text-[#1b1b21] dark:text-white uppercase">
               {company.name}
                </h3>
              </Link> 

              {/* <div className="ratings">
                  <StarRatings
                    rating={company?.ratings}
                    starRatedColor="#ffb829"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="2px"
                    name="rating"
                  />
                  <span className="inline-flex relative items-center text-sm font-medium text-center text-white bg-[#1dbf73] ">
                  <div className='text-white pb-1'>
                  <span className="text-sm px-2 py-2  font-medium">{company?.ratings}</span>
                  </div> 
                </span>
                </div> */}

                
              </div>
             
              
                        <span className="bg-primary-100 text-[#454554] text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                              <p>Membership ID : </p>
                              &nbsp; {company.membership}  |  &nbsp; <AiOutlinePhone /> 
                              {company.phone}
                        </span>

                          {/* {!isNaN(5) && (
                            <div className="flex">
            
                              {Array(Math.round(5)
                                .fill()
                                .map((item, i) => (
                                  <svg
                                      className="h-5 w-5 text-yellow-400"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      key={i}
                                  >
                                      <path
                                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                      />
                                  </svg>
                                ))}
                              
                            </div>
                          )}   */}

             <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
             {/* {company.about.length > 75 ?
                `${company.about.substring(0, 75)}...` : company.about
              } */}
              Claim Details . Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore consequuntur quos necessitatibus totam est, fugit quia quibusdam laborum quis dolorem tenetur, cupiditate, modi maiores officia! Asperiores tempora qui adipisci fuga!
              
             </p>
              
              <div className='flex justify-between'>
              
              <span className="inline-flex items-center  bg-green-100 text-green-800 font-semibold md:text-sm text-xs pl-1 pr-2 pt-2  mr-2 md:mr-2 md:px-2 md:py-0.5 dark:bg-green-200 dark:text-green-900"> 
                        Signed by patient &nbsp; <IoIosCheckmarkCircleOutline />
                </span>
                
             
                
                <div className='review text-sm text-grey-800 '>
                  See more info about this claim
                  {/* <a href="/company/[slug]#review" as={`/company/${company.attributes.slug}#review`}> */}
                    <a className="text-red-500" >
                    &nbsp; view detailed info
                    </a>
                  {/* </a> */}
                  <span className="bg-primary-100 text-[#454554] text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                              <p>Hosptal Name : </p>
                              &nbsp; {company.hospitalName}  |  &nbsp; <AiOutlinePhone /> 
                              {company.hospitalNumber}
                        </span>
                </div>
              </div>
  
            </div>
          </div>
        </div>
      {/* )) } */}
    
      </>
  )
}

export default CompanyListItem