import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Search from '../components/Search'
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { dataProjects } from '../data/data';

export default function Projects() {

  const [search, setSearch] = useState("")

  return (
    <>
      <Head>
        <title>UMMRN | Projects</title>
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="z-0 absolute h-screen w-screen bg-[url('/anj.jpg')] bg-cover ">
        <div className='absolute inset-0 z-40 w-screen flex items-center justify-center h-screen bg-opacity-70 bg-white' />
        <div className='absolute inset-0 z-30 w-screen flex items-center justify-center h-screen bg-gradient-to-t from-white' />
      </div>

      <div className="z-50 relative min-h-screen min-w-screen flex flex-col">
        <Navbar />

        {/* content */}
        <div className='flex flex-col items-center'>
          <div className='w-full'>
            <h1 className='text-6xl pb-12 pt-10 font-bold text-center mx-auto px-4 xl:px-20 2xl:px-32 container uppercase'>Projects</h1>
            <div className='container mx-auto px-4 xl:px-20 2xl:px-32'>
              <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                {dataProjects.filter((user: any) => user.title.toLowerCase().includes(search)
                ).map((user: any, idx: number) => (
                  <div key={idx} className='bg-white shadow-lg rounded-md p-4 text-center md:rt flex flex-col font-thin py-4 hover:scale-[103%] hover:text-red-600 duration-300 flex flex-col justify-between'>
                    <div className='flex flex-col items-center'>
                      <div className='h-[90px] w-[100px] mb-3'>
                        <Image alt='anjay' src={`${user.url}`} height={1000} width={1000} className="w-full h-full duration-300" />
                      </div>
                      <h1 className='font-medium uppercase text-lg pt-2 pb-2'>{user.title}</h1>
                      <h1 className='text-gray-500'>by <span className='font-medium'>{user.name}</span> at {user.year}</h1>
                    </div>
                    {user.status === "Open" && <span className='mt-3 px-3 py-1 bg-blue-900 rounded-md text-white text-center w-full font-medium uppercase'>{user.status}</span>}
                    {user.status === "Active" && <span className='mt-3 px-3 py-1 bg-red-600 rounded-md text-white text-center w-full font-medium uppercase'>{user.status}</span>}
                    {user.status === "Completed" && <span className='mt-3 px-3 py-1 bg-green-700 rounded-md text-white text-center w-full font-medium uppercase'>{user.status}</span>}
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
