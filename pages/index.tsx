import Head from 'next/head'
import NavbarLandingPage from '../components/NavbarLandingPage';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>UMMRN</title>
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="z-0 fixed h-screen w-screen bg-[url('/anj.jpg')] bg-cover ">
        <div className='fixed inset-0 z-40 w-screen flex items-center justify-center h-screen bg-opacity-50 bg-black' />
      </div>

      <div className="z-50 relative h-screen w-screen flex flex-col justify-between ">

        <NavbarLandingPage />

        <div className='2xl:px-32 text-white text-center container mx-auto'>
          <h3 className="text-2xl sm:text-4xl font-medium">
            MUHAMMADIYAH MALANG UNIVERSITY
          </h3>
          <h3 className="text-6xl sm:text-8xl font-medium">
            UMM RESEARCH NETWORK
          </h3>
          <h3 className="text-lg sm:text-xl font-medium">
            YOUR RESEARCH OPPORTUNITIES
          </h3>
          <div className='mt-10 flex space-x-4 justify-center'>
            <button className='rounded-md hover:scale-[102%] pt-4 pb-3 w-32 bg-white text-black font-semibold hover:text-white hover:bg-black duration-300 border-white border border-2 hover:border-white'>
              PUSAT BANTUAN
            </button>
            <Link href={'/login'}>
              <button className='rounded-md hover:scale-[102%] pt-4 pb-3 w-32 bg-white text-black font-semibold hover:text-white hover:bg-black duration-300 border-white border border-2 hover:border-white'>
                SIGN IN
              </button>
            </Link>

          </div>

        </div>

        <div></div>
      </div>
    </>
  )
}
