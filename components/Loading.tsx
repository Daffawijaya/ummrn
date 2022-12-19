import React from 'react'

const Loading = () => {
    return (
        <>
            <div className="z-0 absolute h-screen w-screen bg-[url('/anj.jpg')] bg-cover ">
                <div className='absolute inset-0 z-40 w-screen flex items-center justify-center h-screen bg-opacity-70 bg-white' />
                <div className='absolute inset-0 z-30 w-screen flex items-center justify-center h-screen bg-gradient-to-t from-white' />
            </div>

            <div className='absolute inset-0 '>
                <div className='z-50 h-full w-full flex items-center justify-center absolute text-gray-500'>
                    <div className="bg-white rounded-md shadow shadow-md p-4 max-w-sm w-full mx-auto">
                        <div className="animate-pulse flex space-x-4">
                            <div className="flex-1 space-y-3 py-1">
                                <p className='text-center text-xl font-medium'>Please Wait</p>
                                <div className="h-2 bg-gray-500 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>

    )
}

export default Loading