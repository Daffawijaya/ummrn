import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Image from 'next/image'
import Footer from '../../components/Footer'

export default function Profil() {
    return (
        <>
            <Head>
                <title>UMMRN | Cindy</title>
                <link rel="icon" href="/fav.png" />
            </Head>

            <div className="min-h-screen min-w-screen flex flex-col">
                <Navbar />

                {/* content */}
                <div className='flex flex-col items-center'>
                    <div className='w-full'>
                        <h1 className='text-6xl pb-12 pt-10 font-bold text-center mx-auto px-4 xl:px-20 2xl:px-32 container uppercase'>profile</h1>
                    </div>
                    <div className='pt-7 container mx-auto px-4 xl:px-20 2xl:px-32'>
                        <div className='flex md:flex-row flex-col md:space-x-10 space-y-2 md:text-start text-center'>
                            <div className='w-full md: w-auto justify-center flex'>
                                <div className='rounded-full overflow-hidden h-[200px] w-[200px] min-h-[200px] min-w-[200px] mb-3'>
                                    <Image alt='anjay' src={`/cindy.jpeg`} height={1000} width={1000} className="w-full h-full duration-300" />
                                </div>
                            </div>

                            <div className='space-y-4'>
                                <h2 className='text-2xl font-bold text-gray-800 text-center md:text-start uppercase'>Cindy Patika Sari</h2>
                                <div className='space-y-1 md:w-auto w-full'>
                                    <h1 className='text-lg font-bold text-gray-800 uppercase'>Education:</h1>
                                    <div>
                                        <p>2011-2013 Master in Informatics (M.Kom) - Modeling and prototyping the Knowledge Management System on the higher education environment</p>
                                        <p>2005-2009 Bachelor in Informatics (S.Kom) - Designing a clustering (High Availability) server on the intranet</p>
                                    </div>
                                </div>
                                <div className='space-y-1'>
                                    <h1 className='text-lg font-bold text-gray-800 uppercase'>Teaching Experinces:</h1>
                                    <div>
                                        <p>How to Survive</p>
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
                                        <p>CSS</p>
                                    </div>
                                </div>
                                <div className='space-y-1'>
                                    <h1 className='text-lg font-bold text-gray-800 uppercase'>Awards:</h1>
                                    <div>
                                        <p>Wanita Tercantik Bagi Saya</p>
                                    </div>
                                </div>
                                <div className='space-y-1'>
                                    <h1 className='text-lg font-bold text-gray-800 uppercase'>Topics of Research:</h1>
                                    <div>
                                        <p>UI/UX Design</p>
                                    </div>
                                </div>
                                <div className='space-y-1'>
                                    <h1 className='text-lg font-bold text-gray-800 uppercase'>Publications:</h1>
                                    <div>
                                        <p>[1] I. Nuryasin, Y. Prayudi, and T. Dirgahayu, “Prototype of Knowledge Management System for the Higher Education Institution in Indonesia,” Semin. Nas. Apl. Tenologi Inf., pp. 6–12, 2013.</p>
                                        <p>[2] I. Nuryasin, “Model Communities of Practice (CoP) Pada Kelas Paralel di Jurusan Teknik Informatika, Universitas Muhammadmiyah Malang,” Semin. Nas. Teknol. dan Rekayasa, vol. 2, pp. v78–v82, 2016.</p>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
