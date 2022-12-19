import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
import { dataCall } from '../data/data';
import Loading from '../components/Loading';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CallForProjects() {

  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get('https://639f3d465eb8889197f807ab.mockapi.io/cfp');
        setData(response);
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>UMMRN | Call for Projects</title>
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="z-0 absolute h-screen w-[100%] bg-[url('/anj.jpg')] bg-cover ">
        <div className='absolute inset-0 z-40 w-[100%] flex items-center justify-center h-screen bg-opacity-70 bg-white' />
        <div className='absolute inset-0 z-30 w-[100%] flex items-center justify-center h-screen bg-gradient-to-t from-white' />
      </div>

      <div className="relative z-10 min-h-screen min-w-screen flex flex-col">
        <Navbar setSearch={setSearch} />

        {/* content */}
        {!loading ?
          <>
            <div className='flex flex-col items-center'>
              <div className='w-full'>
                <h1 className='text-6xl pb-12 pt-10 font-bold text-center mx-auto px-4 xl:px-20 2xl:px-32 container uppercase'>Call for Projects</h1>
                <div className='container mx-auto px-4 xl:px-20 2xl:px-32'>
                  <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                    {data.filter((user: any) => user.title.toLowerCase().includes(search)
                    ).map((user: any, idx: number) => (
                      <div key={idx} className='bg-white font-thin p-4 rounded-md shadow-lg text-center py-4 hover:scale-[103%] hover:text-red-600 duration-300 flex flex-col'>
                        <div className='flex flex-col items-center'>
                          <div className='h-[90px] w-[100px] mb-3'>
                            <Image alt='anjay' src={`/cfp.png`} height={1000} width={1000} className="w-full h-full duration-300" />
                          </div>
                        </div>

                        <h1 className='font-medium text-lg pt-2 pb-2 uppercase'>{user.title}</h1>
                        <h1 className='text-gray-500'>by <span className='font-medium'>{user.name}</span></h1>
                        <h1 className='text-blue-600'>Funded, approximaly Rp 2.000.000</h1>
                        <h1 className='text-gray-500'>Quota: {user.quota}</h1>
                        <h1 className='text-gray-500'>Deadline: <span className='text-red-500 font-semibold'>{user.deadline}</span></h1>
                        <button className='mt-3 px-3 py-1 bg-primary hover:scale-[102%] duration-300 rounded-md text-white text-center bg-blue-900'>Join</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </>
          :
          <Loading />
        }
      </div>
    </>
  )
}
