import React from 'react'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { MdLocationOn } from "react-icons/md";
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='mt-20 wrapper'>
        <div className='flex gap-10 items-center justify-evenly'> 
            <div className='flex flex-col text-white'>
                <h1 className='text-4xl font-bold mb-6'>Let's Work Together!</h1>
                <p className='max-w-[45rem] mb-10 text-lg'>Lorem ipsum dolor sit amet consectetur. Nam sit duis maecenas dui in. Varius iaculis convallis mattis integer. Purus orci convallis rhoncus sit in posuere id amet nullam. id amet nullam. id amet nullam.</p>
                <ul className='flex flex-col gap-10'>
                    <li><Link className='contact-list'><FaPhoneAlt className='text-2xl'/>+63 929 973 7056</Link></li>
                    <li><Link className='contact-list'><FaEnvelope className='text-2xl'/>darylljvillanueva@gmail.com</Link></li>
                    <li><Link className='contact-list mb-5'><MdLocationOn className='text-2xl'/>Trapiche 3, Tanauan City, Batangas</Link></li>
                </ul>
            </div>
            <form action="" className='contact-me flex flex-col gap-5 mt-6'>
                <input type="text" name='name' placeholder='Name'/>
                <input type="email" name='email' placeholder='Email'/>
                <textarea name="" id="" rows="4" cols="50" placeholder='Message'></textarea>
                <button className='text-xl bg-[#222831] text-white rounded-md py-2 hover:bg-white hover:border-2 hover:border-none hover:text-black transition-all'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact