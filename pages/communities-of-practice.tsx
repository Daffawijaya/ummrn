import Head from 'next/head'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Footer from '../components/Footer'

const data = [
  {
    title: "Knowledge Management",
    url: "/cop.png",
    desc: "Forum Group Discussion about Knowledge Management and its application.",
    author: "Daffa Wijaya",
    member: [
      {
        id: 1,
        name: "Cindy Patika Sari"
      },
      {
        id: 2,
        name: "Dafa Yan Wijaya"
      }
    ]
  },
  {
    title: "Software Engineering",
    url: "/cop.png",
    desc: "Forum Group Discussion about Knowledge Management and its application.",
    author: "Cindy Patika Sari",
    member: [
      {
        id: 1,
        name: "Cindy Patika Sari"
      },
      {
        id: 2,
        name: "Dafa Yan Wijaya"
      }
    ]
  },
  {
    title: "Knowledge Management",
    url: "/cop.png",
    desc: "Forum Group Discussion about Knowledge Management and its application.",
    author: "Daffa Wijaya",
    member: [
      {
        id: 1,
        name: "Cindy Patika Sari"
      },
      {
        id: 2,
        name: "Dafa Yan Wijaya"
      }
    ]
  },
  {
    title: "Knowledge Management",
    url: "/cop.png",
    desc: "Forum Group Discussion about Knowledge Management and its application.",
    author: "Daffa Wijaya",
    member: [
      {
        id: 1,
        name: "Cindy Patika Sari"
      },
      {
        id: 2,
        name: "Dafa Yan Wijaya"
      }
    ]
  },
  {
    title: "Software Engineering",
    url: "/cop.png",
    desc: "Forum Group Discussion about Knowledge Management and its application.",
    author: "Cindy Patika Sari",
    member: [
      {
        id: 1,
        name: "Cindy Patika Sari"
      },
      {
        id: 2,
        name: "Dafa Yan Wijaya"
      }
    ]
  },
  {
    title: "Knowledge Management",
    url: "/cop.png",
    desc: "Forum Group Discussion about Knowledge Management and its application.",
    author: "Daffa Wijaya",
    member: [
      {
        id: 1,
        name: "Cindy Patika Sari"
      },
      {
        id: 2,
        name: "Dafa Yan Wijaya"
      }
    ]
  },
]

export default function CommunitiesofPractice() {
  return (
    <>
      <Head>
        <title>UMMRN | Communities of Practice</title>
      </Head>

      <div className="z-50 relative min-h-screen min-w-screen flex flex-col">
        <Navbar />

        {/* content */}
        <div className='flex flex-col items-center pt-24'>
          <div className='px-[15%] pt-8 divide-y w-full'>
            <h1 className='text-3xl font-bold pb-5 text-gray-800 text-center'>Communities of Practice</h1>
            <div className='pt-4'>
              <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                {data.map((user: any, idx: number) => (
                  <div key={idx} className='flex flex-col md:items-start items-center py-4 hover:scale-[103%] hover:text-secondary-2 duration-300 flex flex-col'>
                    <div className='rounded-full overflow-hidden h-[100px] w-[100px] mb-3'>
                      <Image alt='anjay' src={`${user.url}`} height={1000} width={1000} className="w-full h-full duration-300" />
                    </div>
                    <h1 className='text-lg font-bold pb-2 text-center md:text-start'>{user.title}</h1>
                    <h1 className='text-gray-500 pb-2 text-center md:text-start'>{user.desc}</h1>
                    <h1 className='text-gray-500 text-center md:text-start'>Author:</h1>
                    <h1 className='text-gray-500 pb-2 text-center md:text-start'>{user.author}</h1>
                    <h1 className='text-gray-500 text-center md:text-start'>Member:</h1>
                    {user.member.map((member: any, idx: number) => (
                      <h1 key={idx} className='text-gray-500 text-center md:text-start'>{member.id}. {member.name}</h1>
                    ))}
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
