import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { dataCall } from '../data/data';

export default function CallForProjects() {

  const [search, setSearch] = useState("")
  return (
    <>
      <Head>
        <title>UMMRN | Call for Projects</title>
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="min-h-screen min-w-screen flex flex-col">
        <Navbar />

        {/* content */}
        <div className='flex flex-col items-center'>
          <div className='w-full'>
            <h1 className='text-6xl pb-12 pt-10 font-bold text-center mx-auto px-4 xl:px-20 2xl:px-32 container uppercase'>Researches</h1>
            <div className='container mx-auto px-4 xl:px-20 2xl:px-32'>
              <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {dataCall.filter((user: any) => user.title.toLowerCase().includes(search)
                ).map((user: any, idx: number) => (
                  <div key={idx} className='border p-4 rounded-md shadow-lg text-center py-4 hover:scale-[103%] hover:text-secondary-2 duration-300 flex flex-col'>
                    <div className='flex flex-col items-center'>
                      <div className='h-[90px] w-[100px] mb-3'>
                        <Image alt='anjay' src={`${user.url}`} height={1000} width={1000} className="w-full h-full duration-300" />
                      </div>
                    </div>

                    <h1 className='font-bold text-lg pt-2 pb-2'>{user.title}</h1>
                    <h1 className='text-gray-500'>by <span className='font-medium'>{user.desc}</span></h1>
                    <h1 className='text-blue-600'>Funded, approximaly Rp {user.funded}</h1>
                    <h1 className='text-gray-500'>Quota: {user.quota}</h1>
                    <h1 className='text-gray-500'>Deadline: <span className='text-red-500 font-semibold'>{user.deadline}</span></h1>
                    <button className='mt-3 px-3 py-1 bg-primary hover:scale-[102%] duration-300 rounded-md text-white text-center'>Join</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
