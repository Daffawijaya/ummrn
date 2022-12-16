import Head from 'next/head'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Footer from '../components/Footer'
import { BsFillPencilFill } from "react-icons/bs";
import NavbarHome from '../components/NavbarHome';

export default function Profil() {
    return (
        <>
            <Head>
                <title>UMMRN | Profil</title>
                <link rel="icon" href="/fav.png" />
            </Head>

             <div className="min-h-screen min-w-screen flex flex-col">
                <NavbarHome />

                {/* content */}
                <div className='flex flex-col items-center lg:pt-[140px] pt-[80px]'>
                    <div className='w-full'>
                        <div className='py-20 bg-background-10 shadow-inner-lg '>
                            <h1 className='text-5xl font-bold text-start mx-auto px-4 xl:px-20 2xl:px-32 container'>Profile</h1>
                        </div>
                        <div className='pt-7 container mx-auto px-4 xl:px-20 2xl:px-32'>
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
                                        <h2 className='text-2xl font-bold text-gray-800 text-center md:text-start w-full md:w-auto'>Cindy Patika Sari</h2>
                                        <button
                                            type="submit"
                                            className="md:block hidden hover:scale-[101%] duration-300 text-white bg-secondary-2 px-3 hover:bg-secondary-3 focus:ring-4 focus:outline-none focus:ring-secondary-1 font-medium rounded-md text-[10px] sm:text-xs md:text-sm py-1.5 sm:py-2 text-center"
                                        >
                                            Edit Profil
                                        </button>
                                    </div>
                                    <div className='space-y-1 md:w-auto w-full'>
                                        <h1 className='text-lg font-bold text-gray-800'>Education:</h1>
                                        <div>
                                            <p>2011-2013 Master in Informatics (M.Kom) - Modeling and prototyping the Knowledge Management System on the higher education environment</p>
                                            <p>2005-2009 Bachelor in Informatics (S.Kom) - Designing a clustering (High Availability) server on the intranet</p>
                                        </div>
                                    </div>
                                    <div className='space-y-1'>
                                        <h1 className='text-lg font-bold text-gray-800'>Teaching Experinces:</h1>
                                        <div>
                                            <p>Database Design</p>
                                            <p>Software Engineering</p>
                                        </div>
                                    </div>
                                    <div className='space-y-1'>
                                        <h1 className='text-lg font-bold text-gray-800'>Organization Experinces:</h1>
                                        <div>
                                            <p>Dimpa</p>
                                            <p>HMIF</p>
                                        </div>
                                    </div>
                                    <div className='space-y-1'>
                                        <h1 className='text-lg font-bold text-gray-800'>Skills:</h1>
                                        <div>
                                            <p>Frontend Web Developer</p>
                                            <p>Javascript</p>
                                        </div>
                                    </div>
                                    <div className='space-y-1'>
                                        <h1 className='text-lg font-bold text-gray-800'>Awards:</h1>
                                        <div>
                                            <p>Wanita Tercantik Bagi Saya</p>
                                        </div>
                                    </div>
                                    <div className='space-y-1'>
                                        <h1 className='text-lg font-bold text-gray-800'>Topics of Research:</h1>
                                        <div>
                                            <p>Project Management</p>
                                            <p>UI/UX Design</p>
                                        </div>
                                    </div>
                                    <div className='space-y-1'>
                                        <h1 className='text-lg font-bold text-gray-800'>Publications:</h1>
                                        <div>
                                            <p>[1] I. Nuryasin, Y. Prayudi, and T. Dirgahayu, “Prototype of Knowledge Management System for the Higher Education Institution in Indonesia,” Semin. Nas. Apl. Tenologi Inf., pp. 6–12, 2013.</p>
                                            <p>[2] I. Nuryasin, “Model Communities of Practice (CoP) Pada Kelas Paralel di Jurusan Teknik Informatika, Universitas Muhammadmiyah Malang,” Semin. Nas. Teknol. dan Rekayasa, vol. 2, pp. v78–v82, 2016.</p>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="md:hidden hover:scale-[101%] duration-300 text-white bg-secondary-2 px-3 hover:bg-secondary-3 focus:ring-4 focus:outline-none focus:ring-secondary-1 font-medium rounded-md text-[10px] sm:text-xs md:text-sm py-1.5 sm:py-2 text-center"
                                    >
                                        Edit Profil
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
