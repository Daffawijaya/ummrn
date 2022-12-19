import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import Moment from 'react-moment';


export default function Projects() {

  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get('https://639f3d465eb8889197f807ab.mockapi.io/projects');
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
        <title>UMMRN | Projects</title>
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="z-0 absolute h-screen w-[100%] bg-[url('/anj.jpg')] bg-cover ">
        <div className='absolute inset-0 z-40 w-[100%] flex items-center justify-center h-screen bg-opacity-70 bg-white' />
        <div className='absolute inset-0 z-30 w-[100%] flex items-center justify-center h-screen bg-gradient-to-t from-white' />
      </div>

      <div className="z-50 relative min-h-screen min-w-screen flex flex-col">
        <Navbar setSearch={setSearch} />

        {/* content */}
        {!loading ?
          <>
            <div className='flex flex-col items-center'>
              <div className='w-full'>
                <h1 className='text-6xl pb-12 pt-10 font-bold text-center mx-auto px-4 xl:px-20 2xl:px-32 container uppercase'>Projects</h1>
                <div className='container mx-auto px-4 xl:px-20 2xl:px-32'>
                  <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                    {data.filter((user: any) => user.title.toLowerCase().includes(search)
                    ).map((user: any, idx: number) => (
                      <div key={idx} className='bg-white shadow-lg rounded-md p-4 text-center md:rt flex flex-col font-thin py-4 hover:scale-[103%] hover:text-red-600 duration-300 flex flex-col justify-between'>
                        <div className='flex flex-col items-center'>
                          <div className='h-[90px] w-[100px] mb-3'>
                            <Image alt='anjay' src={`/projects.png`} height={1000} width={1000} className="w-full h-full duration-300" />
                          </div>
                          <h1 className='font-medium uppercase text-lg pt-2 pb-2'>{user.title}</h1>
                          <h1 className='text-gray-500'>by <span className='font-medium'>{user.name}</span> at <Moment format="YYYY">
                            {user.year}
                          </Moment></h1>
                        </div>
                        {user.id === "1" && <span className='mt-3 px-3 py-1 bg-blue-900 rounded-md text-white text-center w-full font-medium uppercase'>Open</span>}
                        {user.id === "2" && <span className='mt-3 px-3 py-1 bg-red-600 rounded-md text-white text-center w-full font-medium uppercase'>Complete</span>}
                        {user.id === "3" && <span className='mt-3 px-3 py-1 bg-green-700 rounded-md text-white text-center w-full font-medium uppercase'>Join</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Footer /></>
          :
          <Loading />
        }
      </div>
    </>
  )
}
