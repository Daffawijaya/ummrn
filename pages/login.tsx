import Head from 'next/head'
import { AiFillHome } from "react-icons/ai";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Login() {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <>
            <Head>
                <title>UMMRN | Login</title>
                <link rel="icon" href="/polri.png" />
            </Head>
            <div className="z-0 fixed h-screen w-screen bg-[url('/background.jpg')] bg-cover">
                <div className='bg-black h-full w-full opacity-60' />
            </div>

            <div className="z-50 relative h-screen w-screen">
                <div className='flex flex-col justify-between h-full'>

                    <div></div>

                    <div className="min-w-[300px] text-white text-center flex flex-col items-center">
                        <h3 className="text-xs md:text-sm font-medium">
                            UNIVERSITAS MUHAMMADIYAH MALANG
                        </h3>
                        <h1 className="pb-5 text-sm sm:text-xl md:text-3xl font-medium">
                            UMM Research Network
                        </h1>
                        <div className='h-14 w-34 '>
                            <Image alt='anjay' src={'/logo-umm_1.png'} height={800} width={800} className="w-full h-full" />
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className='shadow-md bg-white md:w-[380px] w-[300px] h-auto rounded rounded-xl p-5 justify-center flex flex-col items-center hover:scale-[101%] duration-300'>
                            <h1 className='text-2xl font-bold'>Selamat Datang!</h1>
                            <p className='text-sm text-gray-500 pb-3'>Silahkan Masukkan Detail Anda</p>
                            <div className='flex flex-col space-y-3 w-full'>
                                <div className='flex flex-col w-full space-y-2'>
                                    <label className='font-medium'>
                                        Username
                                    </label>
                                    <input type="text" className='rounded rounded-md border-1 border-gray-300 focus:ring-secondary-2 duration-300 focus:border-none' id="1" name="username" placeholder='Masukkan Username Anda'>
                                    </input>
                                </div>
                                <div className='flex flex-col w-full space-y-2'>
                                    <label className='font-medium'>
                                        Kata Sandi
                                    </label>
                                    <input type="password" className='rounded rounded-md border-1 border-gray-300 focus:ring-secondary-2 duration-300 focus:border-none' id="2" name="password" placeholder='Masukkan Kata Sandi Anda'>
                                    </input>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full py-3">
                                <div className="flex items-center space-x-1 sm:space-x-1.5">
                                    <input
                                        id="remember"
                                        type="checkbox"
                                        value=""
                                        className="text-secondary-2 hover:scale-110 duration-300 w-3 h-3 sm:w-4 sm:h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-secondary-2 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                    />
                                    <label
                                        htmlFor="remember"
                                        className="text-[10px] sm:text-xs md:text-sm font-medium"
                                    >
                                        Ingatkan saya
                                    </label>
                                </div>
                                <a
                                    href="#"
                                    className="font-medium hover:text-secondary-3 duration-300 hover:scale-[102%] text-[10px] sm:text-xs md:text-sm text-secondary-2"
                                >
                                    Lupa Kata Sandi?
                                </a>
                            </div>
                            <div className='w-full'>
                                <Link href={"/home"}>
                                    <button
                                        type="submit"
                                        className="hover:scale-[101%] duration-300 w-full text-white bg-secondary-2 hover:bg-secondary-3 focus:ring-4 focus:outline-none focus:ring-secondary-1 font-medium rounded-md text-[10px] sm:text-xs md:text-sm py-1.5 sm:py-2 text-center"
                                    >
                                        Masuk
                                    </button>
                                </Link>
                            </div>

                            <div className='pt-3 text-sm font-medium'>Belum Punya Akun?
                                <Link href={"/register"}>
                                    <button className='duration-300 hover:scale-105 text-secondary-2 hover:text-secondary-3 hover:underline ml-1'> Daftar Disini</button>
                                </Link>
                            </div>
                            <p className="flex items-center h-[33px] w-full my-2">
                                <Image alt='anjay' src={'/divider.png'} height={1000} width={1000} className="w-full h-full" />
                            </p>
                            <div className='w-full'>
                                <Link href={"/home"}>
                                    <button
                                        type="submit"
                                        className="flex flex-row items-center space-x-2 hover:scale-[101%] justify-center duration-300 w-full bg-white hover:bg-secondary-2 hover:border-secondary-2 hover:text-white focus:ring-4 border-gray-300 border-2 focus:outline-none focus:ring-secondary-1 font-medium rounded-md text-[10px] sm:text-xs md:text-sm py-1.5 sm:py-2 text-center"
                                    >
                                        <p className="flex items-center h-5">
                                            <Image alt='anjay' src={'/google.png'} height={1000} width={1000} className="w-full h-full" />
                                        </p>
                                        <p>Masuk dengan Webmail UMM</p>
                                    </button>
                                </Link>
                            </div>



                        </div>
                    </div>

                    <div className='h-20'></div>

                    <div></div>
                    <Link href={"/"}>
                        <div className='absolute text-white right-10 top-7 opacity-70 hover:opacity-100 hover:text-secondary-2 hover:scale-105 duration-300'><AiFillHome className='h-6 w-6' /></div>
                    </Link>
                </div>
            </div>
        </>
    )
}
