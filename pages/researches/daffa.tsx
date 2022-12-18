import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Image from 'next/image'
import Footer from '../../components/Footer'

export default function Profil() {
    return (
        <>
            <Head>
                <title>UMMRN | Daffa</title>
                <link rel="icon" href="/fav.png" />
            </Head>

            <div className="min-h-screen min-w-screen flex flex-col">
                
                <Navbar />

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
                                        <Image alt='anjay' src={`/daffa.jpeg`} height={1000} width={1000} className="w-full h-full duration-300" />
                                    </div>
                                </div>

                                <div className='space-y-4'>
                                    <h2 className='text-2xl font-bold text-gray-800 text-center md:text-start'>Dafa Yan Wijaya</h2>
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
                                            <p>Frontend Web Developer</p>
                                            <p>UI/UX Designer</p>
                                        </div>
                                    </div>
                                    <div className='space-y-1'>
                                        <h1 className='text-lg font-bold text-gray-800'>Organization Experinces:</h1>
                                        <div>
                                            <p>Frontend Developer SEAL AWS Internship</p>
                                            <p>Kominfo Ikasti</p>
                                            <p>Nathcofer</p>
                                        </div>
                                    </div>
                                    <div className='space-y-1'>
                                        <h1 className='text-lg font-bold text-gray-800'>Skills:</h1>
                                        <div>
                                            <p>Javascript</p>
                                            <p>Typescript</p>
                                            <p>Next JS</p>
                                            <p>React JS</p>
                                            <p>HTML</p>
                                            <p>CSS</p>
                                            <p>Tailwind</p>
                                            <p>Chakra UI</p>
                                            <p>Bootstrap</p>
                                            <p>Coreldraw</p>
                                            <p>Photoshop</p>
                                            <p>Premiere Pro</p>
                                        </div>
                                    </div>
                                    <div className='space-y-1'>
                                        <h1 className='text-lg font-bold text-gray-800'>Awards:</h1>
                                        <div>
                                            <p>-</p>
                                        </div>
                                    </div>
                                    <div className='space-y-1'>
                                        <h1 className='text-lg font-bold text-gray-800'>Topics of Research:</h1>
                                        <div>
                                            <p>Frontend Developer</p>
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
