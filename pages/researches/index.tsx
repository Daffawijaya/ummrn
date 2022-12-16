import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Image from 'next/image'
import Footer from '../../components/Footer'
import Link from 'next/link'
import Search from '../../components/Search'
import { useState } from 'react';
import NavbarHome from '../../components/NavbarHome'

const data = [
    {
        name: "Daffa Wijaya",
        url: "/daffa.jpeg",
        depart: "Informatics Engineering",
        nim: "201910370311125"
    },
    {
        name: "Cindy Patika Sari",
        url: "/cindy.jpeg",
        depart: "Informatics Engineering",
        nim: "201910370311106"
    },
    {
        name: "Daffa Wijaya",
        url: "/daffa.jpeg",
        depart: "Informatics Engineering",
        nim: "201910370311125"
    },
    {
        name: "Cindy Patika Sari",
        url: "/cindy.jpeg",
        depart: "Informatics Engineering",
        nim: "201910370311106"
    },
    {
        name: "Cindy Patika Sari",
        url: "/cindy.jpeg",
        depart: "Informatics Engineering",
        nim: "201910370311106"
    },
    {
        name: "Daffa Wijaya",
        url: "/daffa.jpeg",
        depart: "Informatics Engineering",
        nim: "201910370311125"
    },
    {
        name: "Cindy Patika Sari",
        url: "/cindy.jpeg",
        depart: "Informatics Engineering",
        nim: "201910370311106"
    },
    {
        name: "Daffa Wijaya",
        url: "/daffa.jpeg",
        depart: "Informatics Engineering",
        nim: "201910370311125"
    },
]

export default function Researches() {

    const [search, setSearch] = useState("")

    return (
        <>
            <Head>
                <title>UMMRN | Researches</title>
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

                            <div className='grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                                {data.filter((user: any) => user.name.toLowerCase().includes(search)
                                ).map((user: any, idx: number) => (
                                    <>
                                        {user.name === "Cindy Patika Sari" ?
                                            <Link key={idx} href={'/researches/cindy'}>
                                                <div className='border rounded-md shadow-md overflow-hidden hover:scale-[103%] hover:text-secondary-2 duration-300 flex flex-col justify-center items-center'>
                                                    <div className='overflow-hidden h-[230px] w-[230px] mb-3'>
                                                        <Image alt='anjay' src={`${user.url}`} height={1000} width={1000} className="w-full h-full duration-300" />
                                                    </div>
                                                    <div className='w-full text-center pb-4 px-4'>
                                                        <h1 className='text-lg text-gray-500'>{user.name}</h1>
                                                        <h1 className='font-bold'>{user.depart}</h1>
                                                    </div>
                                                </div>
                                            </Link>
                                            :
                                            <Link key={idx} href={'/researches/daffa'}>
                                                <div className='border rounded-md shadow-md overflow-hidden hover:scale-[103%] hover:text-secondary-2 duration-300 flex flex-col justify-center items-center'>
                                                    <div className=' overflow-hidden h-[230px] w-[230px] mb-3'>
                                                        <Image alt='anjay' src={`${user.url}`} height={1000} width={1000} className="w-full h-full duration-300" />
                                                    </div>
                                                    <div className='w-full text-center pb-4 px-4'>
                                                        <h1 className='text-lg text-gray-500'>{user.name}</h1>
                                                        <h1 className='font-bold'>{user.depart}</h1>
                                                    </div>
                                                </div>
                                            </Link>
                                            }
                                    </>
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
