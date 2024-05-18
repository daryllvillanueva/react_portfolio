import React from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaFacebookSquare, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoDocumentsSharp, IoPerson } from 'react-icons/io5'
import { GrGallery } from "react-icons/gr";
import { FaLightbulb } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";
import { baseImgUrl } from '../helpers/functions-general';


const Header = ({scrollToElement}) => {

  return (
    <div>
        <div className="header__wrapper">
            <div className="flex flex-col items-center p-5">
                <div className='flex flex-col items-center gap-3'>
                    <img src={`${baseImgUrl}/header/logo.jpg`} alt="" className='rounded-full w-[200px] h-[200px] object-cover mt-2'/>
                    <h2 className='text-2xl text-white'>Daryll Villanueva</h2>
                    <ul className='flex gap-3 text-stone-200/50'>
                        <li><Link className='icons' to="https://www.facebook.com/daryll.villanueva19"><FaFacebookSquare/></Link></li>
                        <li><Link className='icons'><FaLinkedin/></Link></li>
                        <li><Link className='icons'><FaEnvelope/></Link></li>
                        <li><Link className='icons'><FaTwitter/></Link></li>
                        <li><Link className='icons'><FaGithub/></Link></li>
                    </ul>
                    <Link to='/CV-VILLANUEVA.pdf' target='_blank' className="px-4 py-1 rounded-xl mt-2 text-xl bg-white text-black flex items-center gap-2 hover:bg-blue-600 hover:text-white font-semibold"><FaFileDownload className='text-2xl'/>View CV</Link>
                </div>
                <ul className='port-nav'>
                    <li><button onClick={() => scrollToElement("about")} className='navigation'>About</button></li>
                    <li><button onClick={() => scrollToElement("projects")} className='navigation'>Projects</button></li>
                    <li><button onClick={() => scrollToElement("skills")} className='navigation'>Skills</button></li>
                    <li><button onClick={() => scrollToElement("certifications")} className='navigation'>Certifications</button></li>
                </ul>
                <button onClick={() => scrollToElement("contact")} className='btn--contact'>Contact</button>
            </div>
        </div>
    </div>
  )
}

export default Header

