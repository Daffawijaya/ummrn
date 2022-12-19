import Head from 'next/head'
import Navbar from '../../../components/Navbar'
import Image from 'next/image'
import Footer from '../../../components/Footer'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import nookies from "nookies";
import Loading from '../../../components/Loading'

export const getServerSideProps = async (ctx: any) => {
    const { detailId } = ctx.query
    return {
        props: {
            detailId
        }
    }
}

export default function Profil(props: any) {
    const { detailId } = props
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any>([])

    useEffect(() => {
        const fetchData = async (detailId: any) => {
            setLoading(true);
            try {
                const { data: response } = await axios.get(`https://639f3d465eb8889197f807ab.mockapi.io/researcher/${detailId}`);
                setData(response);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }

        fetchData(detailId);
    }, [detailId]);

    console.log(data)

    return (
        <>
            <Head>
                <title>UMMRN | Researchers Detail</title>
                <link rel="icon" href="/fav.png" />
            </Head>

            <div className="z-0 absolute h-screen w-screen bg-[url('/anj.jpg')] bg-cover ">
        <div className='absolute inset-0 z-40 w-screen flex items-center justify-center h-screen bg-opacity-70 bg-white' />
        <div className='absolute inset-0 z-30 w-screen flex items-center justify-center h-screen bg-gradient-to-t from-white' />
      </div>

            <div className="relative z-10 min-h-screen min-w-screen flex flex-col">
                <Navbar />

                {!loading ?
                    <>
                        <div className='flex flex-col items-center'>
                            <div className='w-full'>
                                <h1 className='text-6xl pb-12 pt-10 font-bold text-center mx-auto px-4 xl:px-20 2xl:px-32 container uppercase'>profile</h1>
                            </div>
                            <div className='pt-7 container mx-auto px-4 xl:px-20 2xl:px-32'>
                                <div className='flex md:flex-row flex-col md:space-x-10 space-y-2 md:text-start text-center'>
                                    <div className='w-full md: w-auto justify-center flex'>
                                        <div className='rounded-full overflow-hidden h-[200px] w-[200px] min-h-[200px] min-w-[200px] mb-3'>
                                            <Image alt='anjay' src={data?.image} height={1000} width={1000} className="w-full h-full duration-300" />
                                        </div>
                                    </div>

                                    <div className='space-y-4'>
                                        <h2 className='text-2xl font-bold text-gray-800 text-center md:text-start uppercase'>{data?.name}</h2>
                                        <div className='space-y-1 md:w-auto w-full'>
                                            <h1 className='text-lg font-bold text-gray-800 uppercase'>Education:</h1>
                                            {data?.education?.map((item: any, idx: any) =>
                                            (
                                                <p key={idx}>{item}</p>
                                            ))}
                                        </div>
                                        <div className='space-y-1'>
                                            <h1 className='text-lg font-bold text-gray-800 uppercase'>Teaching Experinces:</h1>
                                            {data?.teaching?.map((item: any, idx: any) =>
                                            (
                                                <p key={idx}>{item}</p>
                                            ))}
                                        </div>
                                        <div className='space-y-1'>
                                            <h1 className='text-lg font-bold text-gray-800 uppercase'>Organization Experinces:</h1>
                                            {data?.organization?.map((item: any, idx: any) =>
                                            (
                                                <p key={idx}>{item}</p>
                                            ))}
                                        </div>
                                        <div className='space-y-1'>
                                            <h1 className='text-lg font-bold text-gray-800 uppercase'>Skills:</h1>
                                            {data?.skills?.map((item: any, idx: any) =>
                                            (
                                                <p key={idx}>{item}</p>
                                            ))}
                                        </div>
                                        <div className='space-y-1'>
                                            <h1 className='text-lg font-bold text-gray-800 uppercase'>Awards:</h1>
                                            {data?.awards?.map((item: any, idx: any) =>
                                            (
                                                <p key={idx}>{item}</p>
                                            ))}
                                        </div>
                                        <div className='space-y-1'>
                                            <h1 className='text-lg font-bold text-gray-800 uppercase'>Topics of Research:</h1>
                                            {data?.topics?.map((item: any, idx: any) =>
                                            (
                                                <p key={idx}>{item}</p>
                                            ))}
                                        </div>
                                        <div className='space-y-1'>
                                            <h1 className='text-lg font-bold text-gray-800 uppercase'>Publications:</h1>
                                            {data?.publications?.map((item: any, idx: any) =>
                                            (
                                                <p key={idx}>{item}</p>
                                            ))}
                                        </div>
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


