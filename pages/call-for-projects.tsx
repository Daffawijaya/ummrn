import Head from 'next/head'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Footer from '../components/Footer'
import Search from '../components/Search'

const data = [
  {
    title: "Model of Communities of Practice in Paralel Class",
    desc: "Daffa Wijaya",
    deadline: "22 May 2022",
    funded: "2.000.000,00",
    url: "/cfp.png",
    quota: 27,
  },
  {
    title: "Model of Communities of Practice in Paralel Class",
    desc: "Daffa Wijaya",
    deadline: "22 May 2022",
    funded: "2.000.000,00",
    url: "/cfp.png",
    quota: 27,
  },
  {
    title: "Model of Communities of Practice in Paralel Class",
    desc: "Cindy Patika Sari",
    deadline: "22 May 2022",
    funded: "2.000.000,00",
    url: "/cfp.png",
    quota: 27,
  },
  {
    title: "Model of Communities of Practice in Paralel Class",
    desc: "Daffa Wijaya",
    deadline: "22 May 2022",
    funded: "2.000.000,00",
    url: "/cfp.png",
    quota: 27,
  },
  {
    title: "Model of Communities of Practice in Paralel Class",
    desc: "Cindy Patika Sari",
    deadline: "22 May 2022",
    funded: "2.000.000,00",
    url: "/cfp.png",
    quota: 27,
  },
  {
    title: "Model of Communities of Practice in Paralel Class",
    desc: "Daffa Wijaya",
    deadline: "22 May 2022",
    funded: "2.000.000,00",
    url: "/cfp.png",
    quota: 27,
  },
]

export default function CallForProjects() {
  return (
    <>
      <Head>
        <title>UMMRN | Call for Projects</title>
        <link rel="icon" href="/polri.png" />
      </Head>

      <div className="min-h-screen min-w-screen flex flex-col">
        <Navbar />

        {/* content */}
        <div className='flex flex-col items-center pt-24'>
          <div className='px-[15%] pt-8 divide-y w-full'>
            <h1 className='text-3xl font-bold pb-5 text-gray-800 text-center'>Call for Projects</h1>
            <div className='pt-4'>
              <div className='w-full flex justify-center'>
                <Search />
              </div>
              <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                {data.map((user: any, idx: number) => (
                  <div key={idx} className='text-center md:text-start py-4 hover:scale-[103%] hover:text-secondary-2 duration-300 flex flex-col'>
                    <div className='flex flex-col items-center md:items-start'>
                      <div className='h-[90px] w-[100px] mb-3'>
                        <Image alt='anjay' src={`${user.url}`} height={1000} width={1000} className="w-full h-full duration-300" />
                      </div>
                    </div>

                    <h1 className='font-bold text-lg pt-2 pb-2'>{user.title}</h1>
                    <h1 className='text-gray-500'>by <span className='font-medium'>{user.desc}</span></h1>
                    <h1 className='text-blue-600'>Funded, approximaly Rp {user.funded}</h1>
                    <h1 className='text-gray-500'>Quota: {user.quota}</h1>
                    <h1 className='text-gray-500'>Deadline: <span className='text-red-500 font-semibold'>{user.deadline}</span></h1>
                    <span></span>
                    <button className='my-3 px-3 py-1 bg-primary hover:scale-[102%] duration-300 rounded-md text-white text-center'>Join</button>
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
