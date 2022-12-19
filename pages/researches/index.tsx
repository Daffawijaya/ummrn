import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Image from 'next/image'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { dataResearches } from '../../data/data'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../components/Loading'

export default function Researches() {
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get('https://639f3d465eb8889197f807ab.mockapi.io/researcher');
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
                <title>UMMRN | Researchers </title>
                <link rel="icon" href="/fav.png" />
            </Head>

            <div className="z-0 absolute h-screen w-[100%] bg-[url('/anj.jpg')] bg-cover ">
                <div className='absolute inset-0 z-40 w-[100%] flex items-center justify-center h-screen bg-opacity-70 bg-white' />
                <div className='absolute inset-0 z-30 w-[100%] flex items-center justify-center h-screen bg-gradient-to-t from-white' />
            </div>
            <>
                <div className="z-50 relative min-h-screen min-w-screen flex flex-col ">
                    <Navbar setSearch={setSearch} />

                    {!loading ?
                        <>
                            <div className='flex flex-col items-center'>
                                <div className='w-full'>

                                    <h1 className='text-6xl pb-12 pt-10 font-bold text-center mx-auto px-4 xl:px-20 2xl:px-32 container uppercase'>Researchers</h1>
                                    <div className='container mx-auto px-4 xl:px-20 2xl:px-32'>

                                        <div className='grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4'>
                                            {dataResearches.filter((user: any) => user.name.toLowerCase().includes(search)
                                            ).map((user: any, idx: number) => (
                                                user.name === "Daffa Wijaya" ?
                                                    <Link key={idx} href={`/researches/daffa`}>
                                                        <div className='bg-white rounded-md shadow-md overflow-hidden hover:scale-[103%]  hover:text-red-600 duration-300 flex flex-col justify-center items-center'>
                                                            <div className='overflow-hidden h-[230px] w-[230px] mb-3'>
                                                                <Image alt='anjay' src={user.url} height={1000} width={1000} className="w-full h-full duration-300" />
                                                            </div>
                                                            <div className='w-full text-center pb-4 px-4'>
                                                                <h1 className='text-lg text-gray-500 font-thin uppercase'>{user.name}</h1>
                                                                <h1 className='font-medium uppercase'>{user.depart}</h1>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    :
                                                    <Link key={idx} href={`/researches/cindy`}>
                                                        <div className='bg-white rounded-md shadow-md overflow-hidden hover:scale-[103%]  hover:text-red-600 duration-300 flex flex-col justify-center items-center'>
                                                            <div className='overflow-hidden h-[230px] w-[230px] mb-3'>
                                                                <Image alt='anjay' src={user.url} height={1000} width={1000} className="w-full h-full duration-300" />
                                                            </div>
                                                            <div className='w-full text-center pb-4 px-4'>
                                                                <h1 className='text-lg text-gray-500 font-thin uppercase'>{user.name}</h1>
                                                                <h1 className='font-medium uppercase'>{user.depart}</h1>
                                                            </div>
                                                        </div>
                                                    </Link>


                                            ))}
                                            {data.filter((user: any) => user.name.toLowerCase().includes(search)
                                            ).map((user: any, idx: number) => (
                                                <Link key={idx} href={`/researches/${user.id}`}>
                                                    <div className='bg-white rounded-md shadow-md overflow-hidden hover:scale-[103%]  hover:text-red-600 duration-300 flex flex-col justify-center items-center'>
                                                        <div className='overflow-hidden h-[230px] w-[230px] mb-3'>
                                                            <Image alt='anjay' src={user.image} height={1000} width={1000} className="w-full h-full duration-300" />
                                                        </div>
                                                        <div className='w-full text-center pb-4 px-4'>
                                                            <h1 className='text-lg text-gray-500 font-thin uppercase'>{user.name}</h1>
                                                            <h1 className='font-medium uppercase'>{user.depart}</h1>
                                                        </div>
                                                    </div>
                                                </Link>
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


        </>
    )
}
