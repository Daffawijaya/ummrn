import Head from 'next/head'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Footer from '../components/Footer'

const data = [
  {
    title: "Diwan Beli Ikan Cupang Terus Viral",
    name: "Daffa Wijaya",
    year: "2022",
    status: "Open",
    url: "/projects.png"
  },
  {
    title: "Kamu Nanyae Ini Potongan Model Apa?",
    name: "Cindy Patika Sari",
    year: "2024",
    status: "Active",
    url: "/projects.png"
  },
  {
    title: "Tutorial Membuat Website Tanpa Bug",
    name: "Cindy Patika Sari",
    year: "2024",
    status: "Completed",
    url: "/projects.png"
  },
  {
    title: "Kamu Nanyae Ini Potongan Model Apa?",
    name: "Cindy Patika Sari",
    year: "2024",
    status: "Active",
    url: "/projects.png"
  },
  {
    title: "Kamu Nanyae Ini Potongan Model Apa?",
    name: "Cindy Patika Sari",
    year: "2024",
    status: "Completed",
    url: "/projects.png"
  },
  {
    title: "Diwan Beli Ikan Cupang Terus Viral",
    name: "Daffa Wijaya",
    year: "2022",
    status: "Open",
    url: "/projects.png"
  },
]

export default function Projects() {
  return (
    <>
      <Head>
        <title>UMMRN | Projects</title>
      </Head>

      <div className="z-50 relative min-h-screen min-w-screen flex flex-col">
        <Navbar />

        {/* content */}
        <div className='flex flex-col items-center pt-24'>
          <div className='px-[15%] pt-8 divide-y w-full'>
            <h1 className='text-3xl font-bold pb-5 text-gray-800 text-center'>Projects</h1>
            <div className='pt-4'>
              <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                {data.map((user: any, idx: number) => (
                  <div key={idx} className='text-center md:text-start flex flex-col md:items-start py-4 hover:scale-[103%] hover:text-secondary-2 duration-300 flex flex-col justify-between'>
                    <div className='flex flex-col items-center md:items-start'>
                      <div className='h-[90px] w-[100px] mb-3'>
                        <Image alt='anjay' src={`${user.url}`} height={1000} width={1000} className="w-full h-full duration-300" />
                      </div>
                      <h1 className='font-bold text-lg pt-2 pb-2'>{user.title}</h1>
                      <h1 className='text-gray-500'>by <span className='font-medium'>{user.name}</span> at {user.year}</h1>
                    </div>
                    {user.status === "Open" && <span className='my-3 px-3 py-1 bg-blue-700 rounded-md text-white text-center w-full'>{user.status}</span>}
                    {user.status === "Active" && <span className='my-3 px-3 py-1 bg-secondary-2 rounded-md text-white text-center w-full'>{user.status}</span>}
                    {user.status === "Completed" && <span className='my-3 px-3 py-1 bg-orange-500 rounded-md text-white text-center w-full'>{user.status}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
