import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Search from '../components/Search'
import { useState } from 'react';
import NavbarHome from '../components/NavbarHome'
import { dataProjects } from '../data/data';

export default function Projects() {

  const [search, setSearch] = useState("")

  return (
    <>
      <Head>
        <title>UMMRN | Projects</title>
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="z-50 relative min-h-screen min-w-screen flex flex-col">
      <NavbarHome />

        {/* content */}
        <div className='flex flex-col items-center lg:pt-[140px] pt-[80px]'>
          <div className='w-full'>
            <div className='py-20 bg-background-10 shadow-inner-lg '>
              <h1 className='text-5xl font-bold rt mx-auto px-4 xl:px-20 2xl:px-32 container'>Projects</h1>
            </div>
            <div className='pt-4 container mx-auto px-4 xl:px-20 2xl:px-32'>
              <div className='w-full flex justify-center'>
                <Search setSearch={setSearch} />
              </div>
              <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                {dataProjects.filter((user: any) => user.title.toLowerCase().includes(search)
                ).map((user: any, idx: number) => (
                  <div key={idx} className='border shadow-lg rounded-md p-4 text-center md:rt flex flex-col py-4 hover:scale-[103%] hover:text-secondary-2 duration-300 flex flex-col justify-between'>
                    <div className='flex flex-col items-center'>
                      <div className='h-[90px] w-[100px] mb-3'>
                        <Image alt='anjay' src={`${user.url}`} height={1000} width={1000} className="w-full h-full duration-300" />
                      </div>
                      <h1 className='font-bold text-lg pt-2 pb-2'>{user.title}</h1>
                      <h1 className='text-gray-500'>by <span className='font-medium'>{user.name}</span> at {user.year}</h1>
                    </div>
                    {user.status === "Open" && <span className='mt-3 px-3 py-1 bg-blue-700 rounded-md text-white text-center w-full'>{user.status}</span>}
                    {user.status === "Active" && <span className='mt-3 px-3 py-1 bg-secondary-2 rounded-md text-white text-center w-full'>{user.status}</span>}
                    {user.status === "Completed" && <span className='mt-3 px-3 py-1 bg-orange-500 rounded-md text-white text-center w-full'>{user.status}</span>}
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
