import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {

  return (
    <>
      <Head>
        <title>UMMRN | Home</title>
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="z-0 fixed h-screen w-screen bg-[url('/5f2b44a2e433099524a989b3e3691e1c.png')] bg-cover ">
        <div className='fixed inset-0 z-40 w-screen flex items-center justify-center h-screen bg-opacity-60 bg-black duration-300 backdrop-blur-sm' />
      </div>

      <div className="z-50 relative h-screen w-screen flex flex-col justify-between ">
        <Navbar />
        <div className='h-36'></div>

        <div className='2xl:px-32 container mx-auto px-4'>
          <span>
            <span className='flex flex-col text-start space-y-4 font-bold text-white hover:translate-x-1 duration-300'>
              <h1 className='text-3xl sm:text-5xl text-start'>YOUR RESEACRH</h1>
              <div className='text-4xl sm:text-6xl text-start hover:text-secondary-2 duration-300'>OPPORTUNITIES</div>
            </span>
          </span>

          <div className="text-white text-start flex flex-col pt-5">
            <h3 className="text-xs sm:text-sm font-medium">
              UNIVERSITAS MUHAMMADIYAH MALANG
            </h3>
            <h1 className="pb-5 text-xl sm:text-3xl font-medium">
              UMM Research Network
            </h1>
          </div>
        </div>

        <div className='relative z-50 w-full'>
          <Footer />
        </div>
      </div>
    </>
  )
}
