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
                <link rel="icon" href="/fav.png" />
            </Head>
            <div className="z-0 fixed h-screen w-[100%] bg-[url('/anj.jpg')] bg-cover ">
                <div className='fixed inset-0 z-40 w-[100%] flex items-center justify-center h-screen bg-opacity-50 bg-black' />
            </div>

            <div className="z-50 relative h-screen w-[100%]">
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
                        <div className='shadow-md bg-white md:w-[380px] w-[300px] h-auto rounded rounded-xl p-5 justify-center flex flex-col items-center hover:scale-[101%] duration-300'>
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
                                        Nomor Hp
                                    </label>
                                    <input type="text" className='rounded rounded-md border-1 border-gray-300 focus:ring-secondary-2 duration-300 focus:border-none' id="3" name="hp" placeholder='Masukkan Nomor Hp Anda'>
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

                                <div className='flex flex-col w-full space-y-2'>
                                    <label className='font-medium'>
                                        Konfirmasi Kata Sandi
                                    </label>
                                    <input type="password" className='rounded rounded-md border-1 border-gray-300 focus:ring-secondary-2 duration-300 focus:border-none' id="4" name="passwordconfirmation" placeholder='Masukkan Konfirmasi Kata Sandi Baru Anda'>
                                    </input>
                                </div>

                            </div>
                            <div className='h-7'></div>
                            <button
                                onClick={() => router.back()}
                                type="submit"
                                className="uppercase hover:scale-[101%] duration-300 w-full text-white bg-secondary-2 hover:bg-secondary-3 focus:ring-4 focus:outline-none focus:ring-secondary-1 font-medium rounded-md text-[10px] sm:text-xs md:text-sm py-1.5 sm:py-2 text-center"
                            >
                                Daftar
                            </button>
                            <p className="flex items-center h-[33px] w-full my-2">
                                <Image alt='anjay' src={'/divider.png'} height={1000} width={1000} className="w-full h-full" />
                            </p>
                            <div className='w-full'>
                                <Link href={"/login"}>
                                    <button
                                        type="submit"
                                        className="uppercase flex flex-row items-center space-x-2 hover:scale-[101%] justify-center duration-300 w-full bg-white hover:bg-secondary-2 hover:border-secondary-2 hover:text-white focus:ring-4 border-gray-300 border-2 focus:outline-none focus:ring-secondary-1 font-medium rounded-md text-[10px] sm:text-xs md:text-sm py-1.5 sm:py-2 text-center"
                                    >
                                        <p className="flex items-center h-5">
                                            <Image alt='anjay' src={'/google.png'} height={1000} width={1000} className="w-full h-full" />
                                        </p>
                                        <p>Daftar dengan Webmail UMM</p>
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>

                    <Link href={"/"}>
                        <div className='fixed text-white right-10 top-7 opacity-70 hover:opacity-100 hover:text-secondary-2 hover:scale-105 duration-300'><AiFillHome className='h-6 w-6' /></div></Link>

                </div>
            </div>
        </>
    )
}
