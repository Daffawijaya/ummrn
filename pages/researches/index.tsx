import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Image from 'next/image'
import Footer from '../../components/Footer'
import Link from 'next/link'
import Search from '../../components/Search'

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
    return (
        <>
            <Head>
                <title>UMMRN | Researches</title>
            </Head>

            <div className="relative z-50 min-h-screen min-w-screen flex flex-col">
                <Navbar />

                {/* content */}
                <div className=' flex flex-col items-center pt-24'>
                    <div className='px-[15%] pt-8 divide-y w-full'>
                        <h1 className='text-3xl font-bold pb-5 text-gray-800 text-center'>Researchers</h1>
                        <div className='pt-4 pb-10'>
                            <div className='w-full flex justify-center'>
                                <Search />
                            </div>

                            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                                {data.map((user: any, idx: number) => (
                                    <>
                                        {user.name === "Cindy Patika Sari" ?
                                            <Link key={idx} href={'/researches/cindy'}>
                                                <div className='py-4 hover:scale-[103%] hover:text-secondary-2 duration-300 flex flex-col justify-center items-center'>
                                                    <div className='rounded-full overflow-hidden h-[150px] w-[150px] mb-3'>
                                                        <Image alt='anjay' src={`${user.url}`} height={1000} width={1000} className="w-full h-full duration-300" />
                                                    </div>
                                                    <h1 className='text-lg text-gray-500'>{user.name}</h1>
                                                    <h1 className='font-bold'>{user.depart}</h1>
                                                </div>
                                            </Link>
                                            :
                                            <Link key={idx} href={'/researches/daffa'}>
                                                <div className='py-4 hover:scale-[103%] hover:text-secondary-2 duration-300 flex flex-col justify-center items-center'>
                                                    <div className='rounded-full overflow-hidden h-[150px] w-[150px] mb-3'>
                                                        <Image alt='anjay' src={`${user.url}`} height={1000} width={1000} className="w-full h-full duration-300" />
                                                    </div>
                                                    <h1 className='text-lg text-gray-500'>{user.name}</h1>
                                                    <h1 className='font-bold'>{user.depart}</h1>
                                                </div>
                                            </Link>}

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
