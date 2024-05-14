import React from 'react'
import { FaTiktok } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Logo from './svg/Logo'

const Navigation = () => {
  return (
    <aside className='px-4 py-6 w-[250px] text-primary h-screen border-r border-line'>
        <div className='flex items-center gap-2'>
          <Logo/>
          <h1 className='mb-0'>Portfolio</h1>
        </div>
        
        <ul className='nav'>
            <li className='nav-link active'><Link to="#">Dashboard</Link></li>
            <li className='nav-link'><Link to="#">Projects</Link></li>
            <li className='nav-link'><Link to="#">Skills</Link></li>
            <li className='nav-link'><Link to="#">Certificates</Link></li>
            <li className='nav-link'><Link to="#">Contact</Link></li>
            <li className='nav-link'><Link to="#">Settings</Link></li>
        </ul>
    </aside>
  )
}

export default Navigation