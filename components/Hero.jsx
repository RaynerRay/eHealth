'use client' 

import Flag from '../public/images/flag.png'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {

// const [filteredCategories, setFilteredCategories] = useState([]);
// const [filters, setFilters] = useState({s:''});

// const search = (s) => {
//     setFilters({s});  
// }

// useEffect(() => {
//     let filCategories = categories.filter(company => company.name.toLowerCase().indexOf(filters.s.toLowerCase()) >= 0)

//     setFilteredCategories(filCategories)
// }, [filters])

  return (
    <div>
        <section className="bg-[#b1ded8] dark:bg-grey-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <div className="flex flex-1 flex-col items-start">
                        {/* <div className="md:mb-8 mb-2 mt-4 flex items-start gap-2 bg-red-500 px-4 py-1 rounded-full">
                            <p className="text-base text-white font-normal">
                                Zimbabwe
                            </p>
                            <div className="w-8 h-5 rounded-full overflow-hidden drop-shadow-xl ">
                                <Image src={Flag} alt="flag"/>
                            </div>
                        </div> */}
                    </div>

                    <h1 className="max-w-2xl mb-4 mt-4 text-3xl font-bold md:tracking-wide leading-none md:text-4xl xl:text-5xl text-slate-900 dark:text-white">Submit your medical claims</h1>
                    
                    {/* <form action="#" className='md:mr-16'>
                        <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                            <div className="relative w-full ">
                                <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-grey-900 dark:text-grey-300">Search Builders, Photographers, Wedding Venues, ...</label>
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-grey-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input onKeyUp={e => search(e.target.value)} className="block p-3 pl-10 w-full text-sm text-grey-900 bg-grey-50 border border-grey-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-grey-700 dark:border-grey-600 dark:placeholder-grey-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search Builders, Photographers, Wedding Venues..." type="input" required=""/>
                            </div>
                            
                            <div>
                                <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white  border cursor-pointer bg-red-500 border-primary-600  hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Search</button>
                            </div>
                            
                        </div>
                        { 
                (filters.s === '' ? "" : filteredCategories.map(category => (
                    <div className="w-2/3 lg:ml-16 ">
                <Link href="category/[id]" as={`/category/${category._id}`}>
                        
                        <a>
                            <div key={category._id} className=" overflow-y-auto w-full border divide-y shadow max-h-72  bg-white text-center text-slate-500 dark:text-slate-400">
                                <p className="block p-2 hover:bg-indigo-50 ..." href="#">{category.name}</p>
                            </div>
                        </a>
                        
                    </Link>
                    </div>
                )))
                }
                    </form> */}
                </div>
                
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        {/* <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" /> */}
                    <Link href={"/product"}>
                    <button className='bg-gray-800 text-white text-bold p-4 text-md rounded-md'>Go to Claims List</button>
                    </Link>
                    </div>                
            </div>
            
            
            
        </section>
    </div>
  )
}


export default Hero