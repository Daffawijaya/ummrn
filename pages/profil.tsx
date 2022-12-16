import Head from 'next/head'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Footer from '../components/Footer'

export default function Profil() {
    return (
        <>
            <Head>
                <title>UMMRN | Profil</title>
            </Head>

            <div className="z-50 relative min-h-screen min-w-screen flex flex-col">
                <Navbar />

                {/* content */}
                <div className='flex flex-col items-center pt-24'>
                    <div className='px-[15%] pt-8 divide-y w-full'>
                        <h1 className='text-3xl font-bold pb-5 text-gray-800 flex justify-center'>Profile</h1>
                        <div className='pt-7'>
                            <div className='flex md:flex-row flex-col md:space-x-10 space-y-2 md:text-start text-center'>
                                <div className='w-full md: w-auto justify-center flex'>
                                    <div className='rounded-full overflow-hidden h-[200px] w-[200px] min-h-[200px] min-w-[200px] mb-3'>
                                        <Image alt='anjay' src={`/cindy.jpeg`} height={1000} width={1000} className="w-full h-full duration-300" />
                                    </div>
                                </div>

                                <div className='space-y-4'>
                                    <h2 className='text-2xl font-bold text-gray-800 text-center md:text-start'>Cindy Patika Sari</h2>
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
                                            <p>Juara 1 Wanita Tercantik</p>
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
