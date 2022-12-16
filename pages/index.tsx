import Head from 'next/head'
import NavbarLandingPage from '../components/NavbarLandingPage'
import { useState } from 'react'

export default function Home() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <Head>
        <title>UMMRN | Home</title>
      </Head>
      <div className="z-0 fixed h-screen w-screen bg-[url('/background.jpg')] bg-cover">
        <div className='bg-black h-full w-full opacity-60' />
      </div>

      <div className="z-50 relative h-screen w-screen flex flex-col justify-between items-center">
        <NavbarLandingPage isAuth={isAuth} setIsAuth={setIsAuth}/>
        <div></div>
        <div className='flex flex-col items-center'>
          <h1 className='text-xl md:text-5xl font-bold text-white pb-2 text-center'>YOUR RESEACRH OPPORTUNITIES</h1>
          <p className='text-white pb-7'>Fill your keywords here!</p>
          <input placeholder='Search for...' type="text" className='opacity-50 h-10 w-[90%] rounded-lg duration-300 hover:scale-[101%]'>
          </input>
          <button className="font-medium hover:text-secondary-2 mt-3 hover:text-white text-black bg-white px-5 py-1.5 rounded-lg hover:bg-secondary-2 duration-300 hover:scale-105">Discover</button>
        </div>
        <div></div>
      </div>
    </>
  )
}
