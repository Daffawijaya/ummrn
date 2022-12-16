import Head from 'next/head'
import Footer from '../components/Footer'
import NavbarHome from '../components/NavbarHome'
import { FaStarOfLife } from "react-icons/fa";
import { dataNotification } from '../data/data';

export default function Notification() {

    return (
        <>
            <Head>
                <title>UMMRN | Notification</title>
                <link rel="icon" href="/fav.png" />
            </Head>

            <div className="min-h-screen min-w-screen flex flex-col bg-[#F8F8F8]">
                <NavbarHome />

                {/* content */}
                <div className='flex flex-col items-center lg:pt-[140px] pt-[80px]'>
                    <div className='py-4 space-y-3 w-full container mx-auto px-4 xl:px-20 2xl:px-32 flex flex-col items-center justify-center'>
                        <div className='bg-white w-full rounded-md py-5 px-8 justify-between flex items-centerS'>
                            <h1 className='text-2xl font-medium'>Notifikasi</h1>
                            <button className=' font-medium text-secondary-2 hover:text-secondary-3 hover:scale-105  duration-300'>Baca Semua</button>
                        </div>
                        <div className=' divide-y w-full'>
                            {dataNotification.map((user: any, idx: number) => (
                                <div key={idx} className=' w-full rounded-md  flex flex-row space-x-2 items-center overflow-hidden hover:bg-blue-100 bg-white duration-300'>
                                    <div className='flex-row flex items-center space-x-2 hover:translate-x-1 duration-300 duration-300  py-5 px-8 w-full'>
                                        <p className='justify-start flex-col align-start h-full flex items-start'><FaStarOfLife className='' /></p>
                                        <div className='flex flex-col'>
                                            <h1 className=' f'>{user.title}</h1>
                                            <h1 className='text-thin text-xs text-secondary-2'>{user.time}</h1>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
