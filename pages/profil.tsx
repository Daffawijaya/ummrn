import Head from 'next/head'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Footer from '../components/Footer'
import { BsFillPencilFill } from "react-icons/bs";

export default function Profil() {
    return (
        <>
            <Head>
                <title>UMMRN | Profil</title>
                <link rel="icon" href="/fav.png" />
            </Head>

            <div className="z-0 absolute h-screen w-[100%] bg-[url('/anj.jpg')] bg-cover ">
                <div className='absolute inset-0 z-40 w-[100%] flex items-center justify-center h-screen bg-opacity-70 bg-white' />
                <div className='absolute inset-0 z-30 w-[100%] flex items-center justify-center h-screen bg-gradient-to-t from-white' />
            </div>

            <div className="relative z-10 min-h-screen min-w-screen flex flex-col">
                <Navbar />

                {/* content */}
                <div className='flex flex-col items-center'>
                    <div className='w-full'>
                        <h1 className='text-6xl pb-12 pt-10 font-bold text-center mx-auto px-4 xl:px-20 2xl:px-32 container uppercase'>profile</h1>
                        <div className='container mx-auto px-4 xl:px-20 2xl:px-32'>
                            <div className='flex md:flex-row flex-col md:space-x-10 space-y-2 md:text-start text-center'>
                                <div className='w-full md: w-auto justify-center flex'>
                                    <div className='rounded-full overflow-hidden h-[200px] w-[200px] min-h-[200px] min-w-[200px] mb-3'>
                                        <div className='flex justify-end items-end'>
                                            <div className='absolute p-3 bg-white rounded-full bg-white hover:bg-secondary-2 duration-300 shadow-md hover:text-white'><BsFillPencilFill className='h-5 w-5' /></div>
                                            <Image alt='anjay' src={`/cindy.jpeg`} height={1000} width={1000} className="w-full h-full duration-300" />
                                        </div>
                                    </div>
                                </div>

                                <div className='space-y-4'>
                                    <div className='flex flex-row items-center text-center md:text-start space-x-4 w-full'>
                                        <h2 className=' text-2xl font-bold text-gray-800 text-center md:text-start w-full md:w-auto uppercase'>Cindy Patika Sari</h2>
                                        <button className='hidden md:flex rounded-md hover:scale-[102%] pt-2 pb-1 px-5 bg-blue-800 text-white font-medium hover:text-white hover:bg-blue-900 duration-300 border-white border border-2 hover:border-white'>
                                            EDIT PROFIL
                                        </button>
                                    </div>
                                    <div className='space-y-1 md:w-auto w-full'>
                                        <h1 className='text-lg font-bold text-gray-800 uppercase'>Username</h1>
                                        <div>
                                            <p>cindypatikasari</p>
                                        </div>
                                    </div>
                                    <div className='space-y-1 md:w-auto w-full'>
                                        <h1 className='text-lg font-bold text-gray-800 uppercase'>Phone</h1>
                                        <div>
                                            <p>08827168966</p>
                                        </div>
                                    </div>
                                    <div className='space-y-1 md:w-auto w-full'>
                                        <h1 className='text-lg font-bold text-gray-800 uppercase'>Email</h1>
                                        <div>
                                            <p>cindypatikasari@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className='space-y-1 md:w-auto w-full'>
                                        <h1 className='text-lg font-bold text-gray-800 uppercase'>NIM</h1>
                                        <div>
                                            <p>201910370311106</p>
                                        </div>
                                    </div>
                                    <div className='space-y-1'>
                                        <h1 className='text-lg font-bold text-gray-800 uppercase'>Major:</h1>
                                        <div>
                                            <p>Informatics Engineering</p>
                                        </div>
                                    </div>
                                    <div className='space-y-1'>
                                        <h1 className='text-lg font-bold text-gray-800 uppercase'>Interest:</h1>
                                        <div>
                                            <p>Software Engineering</p>
                                        </div>
                                    </div>
                                    <div className='space-y-1'>
                                        <h1 className='text-lg font-bold text-gray-800 uppercase'>Semester:</h1>
                                        <div>
                                            <p>7</p>
                                        </div>
                                    </div>
                                    <div className='space-y-1'>
                                        <h1 className='text-lg font-bold text-gray-800 uppercase'>Organization Experinces:</h1>
                                        <div>
                                            <p>Dimpa</p>
                                            <p>HMIF</p>
                                        </div>
                                    </div>
                                    <div className='space-y-1'>
                                        <h1 className='text-lg font-bold text-gray-800 uppercase'>Skills:</h1>
                                        <div>
                                            <p>Frontend Web Developer</p>
                                            <p>Javascript</p>
                                        </div>
                                    </div>
                                    <button className='md:hidden rounded-md hover:scale-[102%] pt-2 pb-1 px-5 bg-blue-800 text-white font-medium hover:text-white hover:bg-blue-900 duration-300 border-white border border-2 hover:border-white'>
                                        EDIT PROFIL
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
