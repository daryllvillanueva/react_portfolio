import React from 'react'
import { FaTiktok } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Logo from './svg/Logo'

const Navigation = () => {
  return (
    <div className='px-4 py-6 w-[250px] text-primary h-screen border-r border-line'>
        <Link to="/portfolio">
          <div className='flex items-center gap-2'>
            <Logo/>
            <h1 className='mb-0'>Portfolio</h1>
          </div>
        </Link>
        
        <ul className='nav'>
            <li className='nav-link'><Link to="/portfolio">Portfolio</Link></li>
            <li className='nav-link active'><Link to="/user">User</Link></li>
            <li className='nav-link '><Link to="/services">Services</Link></li>
            <li className='nav-link'><Link to="/projects">Projects</Link></li>
            <li className='nav-link '><Link to="/skills">Skills</Link></li>
            <li className='nav-link'><Link to="/certs">Certificates</Link></li>
            {/* <li className='nav-link'><Link to="/dashboard/settings">Settings</Link></li> */}
        </ul>
    </div>
  )
}

export default Navigation