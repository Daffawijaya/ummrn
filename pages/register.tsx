import Head from 'next/head'
import { AiFillHome } from "react-icons/ai";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';



export default function Register() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>UMMRN | Register</title>
            </Head>
            <div className="z-0 fixed h-screen w-screen bg-[url('/background.jpg')] bg-cover">
                <div className='bg-black h-full w-full opacity-60' />
            </div>

            <div className="z-50 relative h-screen w-screen">
                <div className='flex flex-col h-full'>

                    <div className="py-10 min-w-[300px] text-white text-center flex flex-col items-center">
                        <h3 className="text-xs md:text-sm font-medium">
                            UNIVERSITAS MUHAMMADIYAH MALANG
                        </h3>
                        <h1 className="pb-5 text-sm sm:text-xl md:text-3xl font-medium">
                            UMM Research Network
                        </h1>
                        <div className='h-14 w-34'>
                            <Image alt='anjay' src={'/logo-umm_1.png'} height={800} width={800} className="w-full h-full" />
                        </div>
                    </div>

                    <div className='flex justify-center pb-10'>
                        <div className='shadow-md bg-white md:w-[380px] w-[300px] h-auto rounded rounded-[3%] p-5 justify-center flex flex-col items-center hover:scale-[101%] duration-300'>
                            <h1 className='text-2xl font-bold'>Selamat Datang!</h1>
                            <p className='text-sm text-gray-500 pb-3'>Silahkan Masukkan Detail Anda</p>

                            <div className='flex flex-col space-y-3 w-full'>

                                <div className='flex flex-col w-full space-y-2'>
                                    <label className='font-medium'>
                                        Nama Lengkap
                                    </label>
                                    <input type="text" className='rounded rounded-md border-1 border-gray-300 focus:ring-secondary-2 duration-300 focus:border-none' id="1" name="name" placeholder='Masukkan Nama Lengkap Anda'>
                                    </input>
                                </div>

                                <div className='flex flex-col w-full space-y-2'>
                                    <label className='font-medium'>
                                        NIM
                                    </label>
                                    <input type="text" className='rounded rounded-md border-1 border-gray-300 focus:ring-secondary-2 duration-300 focus:border-none' id="2" name="nim" placeholder='Masukkan NIM Anda'>
                                    </input>
                                </div>

                                <div className='flex flex-col w-full space-y-2'>
                                    <label className='font-medium'>
                                        Email
                                    </label>
                                    <input type="email" className='rounded rounded-md border-1 border-gray-300 focus:ring-secondary-2 duration-300 focus:border-none' id="3" name="email" placeholder='Masukkan Email Anda'>
                                    </input>
                                </div>

                                <div className='flex flex-col w-full space-y-2'>
                                    <label className='font-medium'>
                                        Username
                                    </label>
                                    <input type="text" className='rounded rounded-md border-1 border-gray-300 focus:ring-secondary-2 duration-300 focus:border-none' id="4" name="nim" placeholder='Masukkan Username Baru Anda'>
                                    </input>
                                </div>

                                <div className='flex flex-col w-full space-y-2'>
                                    <label className='font-medium'>
                                        Kata Sandi
                                    </label>
                                    <input type="password" className='rounded rounded-md border-1 border-gray-300 focus:ring-secondary-2 duration-300 focus:border-none' id="4" name="password" placeholder='Masukkan Kata Sandi Baru Anda'>
                                    </input>
                                </div>

                            </div>

                            <div className="flex justify-between items-center w-full py-3">
                                <div className="flex items-center space-x-1 sm:space-x-1.5">
                                    <input
                                        id="remember"
                                        type="checkbox"
                                        value=""
                                        className="text-primary hover:scale-110 duration-300 w-3 h-3 sm:w-4 sm:h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
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

                            <button
                                onClick={() => router.back()}
                                type="submit"
                                className="hover:scale-[101%] duration-300 w-full text-white bg-secondary-2 hover:bg-secondary-3 focus:ring-4 focus:outline-none focus:ring-secondary-1 font-medium rounded-md text-[10px] sm:text-xs md:text-sm py-1.5 sm:py-2 text-center"
                            >
                                Buat Akun
                            </button>

                        </div>
                    </div>

                    <Link href={"/"}>
                        <div className='fixed text-white right-10 top-7 opacity-70 hover:opacity-100 hover:text-secondary-2 hover:scale-105 duration-300'><AiFillHome className='h-6 w-6' /></div></Link>

                </div>
            </div>
        </>
    )
}