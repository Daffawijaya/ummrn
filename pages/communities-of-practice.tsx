import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Search from '../components/Search'
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { dataCop } from '../data/data';

export default function CommunitiesofPractice() {

  const [search, setSearch] = useState("")
  return (
    <>
      <Head>
        <title>UMMRN | Communities of Practice</title>
        <link rel="icon" href="/fav.png" />
      </Head>
      <div className="z-0 absolute h-screen w-[100%] bg-[url('/anj.jpg')] bg-cover ">
                <div className='absolute inset-0 z-40 w-[100%] flex items-center justify-center h-screen bg-opacity-70 bg-white' />
                <div className='absolute inset-0 z-30 w-[100%] flex items-center justify-center h-screen bg-gradient-to-t from-white' />
            </div>

      <div className="z-50 relative min-h-screen min-w-screen flex flex-col">
        <Navbar setSearch={setSearch} />

        {/* content */}
        <div className='flex flex-col items-center'>
          <div className='w-full'>
            <h1 className='text-6xl pb-12 pt-10 font-bold text-center mx-auto px-4 xl:px-20 2xl:px-32 container uppercase'>Communities of Practice</h1>
            <div className='container mx-auto px-4 xl:px-20 2xl:px-32'>
              <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                {dataCop.filter((user: any) => user.title.toLowerCase().includes(search)
                ).map((user: any, idx: number) => (
                  <div key={idx} className='font-thin bg-white p-4 rounded-md shadow-lg text-center py-4 hover:scale-[103%] hover:text-red-600 duration-300 flex flex-col'>
                    <div className='flex flex-col items-center'>
                      <div className='flex items-center justify-center rounded-full overflow-hidden h-[100px] w-[100px] mb-3'>
                        <Image alt='anjay' src={`${user.url}`} height={1000} width={1000} className="w-full h-full duration-300" />
                      </div>
                    </div>
                    <h1 className='text-lg font-medium uppercase pb-2 text-center'>{user.title}</h1>
                    <h1 className='text-gray-500 pb-2 text-center'>{user.desc}</h1>
                    <h1 className='text-gray-500 text-center'>Author:</h1>
                    <h1 className='text-gray-500 pb-2 text-center'>{user.author}</h1>
                    <h1 className='text-gray-500 text-center'>Member:</h1>
                    {user.member.map((member: any, idx: number) => (
                      <h1 key={idx} className='text-gray-500 text-center'>{member.name}</h1>
                    ))}
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
