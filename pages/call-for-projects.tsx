import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Search from '../components/Search'
import { useState } from 'react';
import NavbarHome from '../components/NavbarHome'

const data = [
  {
    title: "Testing of Communities of Practice in Paralel Class",
    desc: "Daffa Wijaya",
    deadline: "22 May 2022",
    funded: "2.000.000,00",
    url: "/cfp.png",
    quota: 27,
  },
  {
    title: "Model of Communities of Practice in Paralel Class",
    desc: "Daffa Wijaya",
    deadline: "22 May 2022",
    funded: "2.000.000,00",
    url: "/cfp.png",
    quota: 27,
  },
  {
    title: "Model of Communities of Practice in Paralel Class",
    desc: "Cindy Patika Sari",
    deadline: "22 May 2022",
    funded: "2.000.000,00",
    url: "/cfp.png",
    quota: 27,
  },
  {
    title: "Model of Communities of Practice in Paralel Class",
    desc: "Daffa Wijaya",
    deadline: "22 May 2022",
    funded: "2.000.000,00",
    url: "/cfp.png",
    quota: 27,
  },
  {
    title: "Model of Communities of Practice in Paralel Class",
    desc: "Cindy Patika Sari",
    deadline: "22 May 2022",
    funded: "2.000.000,00",
    url: "/cfp.png",
    quota: 27,
  },
  {
    title: "Model of Communities of Practice in Paralel Class",
    desc: "Daffa Wijaya",
    deadline: "22 May 2022",
    funded: "2.000.000,00",
    url: "/cfp.png",
    quota: 27,
  },
]

export default function CallForProjects() {

  const [search, setSearch] = useState("")
  return (
    <>
      <Head>
        <title>UMMRN | Call for Projects</title>
        <link rel="icon" href="/polri.png" />
      </Head>

      <div className="min-h-screen min-w-screen flex flex-col">
        <NavbarHome />

        {/* content */}
        <div className='flex flex-col items-center lg:pt-[140px] pt-[80px]'>
          <div className='w-full'>
            <div className='py-20 bg-background-10 shadow-inner-lg '>
              <h1 className='text-5xl font-bold text-start mx-auto px-4 xl:px-20 2xl:px-32 container'>Call for Projects</h1>
            </div>
            <div className='pt-4 container mx-auto px-4 xl:px-20 2xl:px-32'>
              <div className='w-full flex justify-center'>
                <Search setSearch={setSearch} />
              </div>
              <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {data.filter((user: any) => user.title.toLowerCase().includes(search)
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
        <Footer/>
      </div>
    </>
  )
}
