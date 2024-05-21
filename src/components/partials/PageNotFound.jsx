import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='flex flex-col items-center gap-5 leading-none'>
        <h2 className='text-[6rem] leading-none'>Oooops!</h2>
        <h2 className='text-[4rem] leading-none'><span className='text-red-600'>404</span> - PAGE NOT FOUND</h2>
        <p className='desc'>The page you are looking for might have been removed or is temporarily unavailable.</p>
        <Link to='/login' className='text-2xl p-4 rounded-2xl leading-none border border-line hover:bg-stone-400/5 transition-colors'>GO TO HOMEPAGE</Link>
      </div>
    </div>
  )
}

export default PageNotFound