import React from 'react'
import { IoTriangleSharp } from "react-icons/io5";
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';
import Certs from '../certs/Certs';
import Contact from '../contact/Contact';
import Header from '../../../../partials/Header';
import Services from '../services/Services';
const Home = () => {
  return (
    <div>
        <aside className='bg-[#0f172a] fixed h-screen z-[999]'>
            <Header/>
        </aside>
        <main className='relative h-[460lvh] bg-[#010617]'>
           
            <div className='absolute left-[25rem] top-[2.2rem] max-w-[80rem] mr-4'>
                <div className='bg-[#0f172a] w-full rounded-2xl py-[1rem]'>
                    <div className='px-6 py-3'>
                        <h2 className='text-xl leading-9 font-medium text-white'>I’m an aspiring <span className='text-blue-600/70 font-bold'>front-end developer</span> who is passionate about creating responsive websites, and I am committed delivering user-friendly interfaces that offer an engaging and seamless browsing experience. My goal is to use my skills and creativity to build websites that meet the needs of 
                        clients and users.
                        </h2>
                        <h2 className='text-xl leading-9 font-medium text-white mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, vitae dolorem quo aut aperiam ipsum similique rem eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repudiandae ullam, consectetur perferendis ratione quo quas officiis corporis accusamus nostrum fuga voluptates nulla sed aperiam sint cumque atque? Modi, quaerat.</h2>
                    </div>                  
                </div>
                <div className='bg-[#0f172a] w-full rounded-2xl mt-9 py-[1rem]'>
                    <div className='px-6 py-3'>
                        <h1 className='text-3xl text-white font-semibold'>Education</h1>
                        <ul className='flex items-center gap-10 text-white mt-3'>
                            <li><h2 className='text-xl font-semibold'>De La Salle Lipa - Bachelor of Science in Information Technology</h2></li>
                            <li><p className='text-xl font-bold mt-2'>2020 - 2024</p></li>
                        </ul>
                    </div>
                </div>
                <Services/>
                <Projects id='projects'/>
                <Skills/>
                <Certs/>
                <Contact/>
            </div>
        </main>
    </div>
  )
}

export default Home

// relative isolate

// pl-[25rem] pt-[10rem]