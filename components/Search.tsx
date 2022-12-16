import React from 'react'

interface dataProps {
    setSearch: any;
}

const Search = ({ setSearch }: dataProps) => {

    const handleSearchChange = (e: any) => {
        setSearch(e.target.value);
    }

    return (
        <div className='pt-4 pb-8 w-full max-w-[800px] flex justify-center'>
            <input onChange={handleSearchChange} placeholder='Search for...' type="text" className='opacity-50 h-10 w-[90%] rounded-lg duration-300 hover:scale-[101%]'>
            </input>
        </div>

    )
}

export default Search