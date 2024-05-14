import React from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaFacebookSquare, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoDocumentsSharp, IoPerson } from 'react-icons/io5'
import { GrGallery } from "react-icons/gr";
import { FaLightbulb } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";
import { baseImgUrl } from '../helpers/functions-general';


const Header = () => {

  return (
    <div>
        <div className="header__wrapper">
            <div className="flex flex-col items-center p-5">
                <div className='flex flex-col items-center gap-3'>
                    <img src={`${baseImgUrl}/header/logo.jpg`} alt="" className='rounded-full w-[200px] h-[200px] object-cover mt-2'/>
                    <h2 className='text-2xl text-white'>Daryll Villanueva</h2>
                    <ul className='flex gap-3 text-stone-200/50'>
                        <li><Link className='icons'><FaFacebookSquare/></Link></li>
                        <li><Link className='icons'><FaLinkedin/></Link></li>
                        <li><Link className='icons'><FaEnvelope/></Link></li>
                        <li><Link className='icons'><FaTwitter/></Link></li>
                        <li><Link className='icons'><FaGithub/></Link></li>
                    </ul>
                    <Link to='/CV-VILLANUEVA.pdf' target='_blank' className="px-4 py-1 rounded-xl mt-2 text-xl bg-white text-black flex items-center gap-2 hover:bg-blue-600 hover:text-white font-semibold"><FaFileDownload className='text-2xl'/>View CV</Link>
                </div>
                <ul className='port-nav'>
                    <li><Link to="/home" className='nav-flex active'>About</Link></li>
                    <li><Link to="/projects" className='nav-flex'>Projects</Link></li>
                    <li><Link to="/skills" className='nav-flex'>Skills</Link></li>
                    <li><Link to="/certs" className='nav-flex'>Certifications</Link></li>
                </ul>
                <Link to="/contact" className='btn--contact'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Header

