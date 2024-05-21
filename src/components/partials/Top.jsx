import React, { useState } from 'react'
import { CiBellOn } from 'react-icons/ci'
import { LiaKeySolid, LiaSignOutAltSolid, LiaUserCircle } from 'react-icons/lia';
import { PiCaretDownThin } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { StoreContext } from '../../store/StoreContext';
import { checkLocalStorage } from '../helpers/functions-general';

const Top = () => {
  const [showInfo, setShowInfo] = useState(false);
  const toggleShowInfo = () => setShowInfo(!showInfo);

  const {store} = React.useContext(StoreContext);
  const name = store.credentials?.data.user_name
  const email = store.credentials?.data.user_email


  const handleLogout = () => {
    setTimeout(() => {
      if (checkLocalStorage() !== null) {
        localStorage.removeItem("glatoken");
        window.location.replace(`/login`);
        return;
      }
    }, 1500);
  };

  return (  
    <header className='header px-4 py-3 border-b border-line'>
      <div className='flex justify-end items-center gap-4 w-full relative'>
        <button className='text-3xl'><CiBellOn/></button>
        <img src="https://via.placeholder.com/40x40" alt="logo" className='size-[40px] rounded-full object-cover'/>
        <button className='flex items-center gap-5' onClick={toggleShowInfo}>{name}<PiCaretDownThin/></button>
        <div className={`header-dropdown absolute bg-secondary p-4 px-6 rounded-md right-0 top-[calc(100%+12px)] text-center shadow-sm z-[999] ${showInfo ? "" : "hidden"}`}>
          <img src="https://via.placeholder.com/40x40" alt="" className='size-[40px] rounded-full object-cover mx-auto'/>
          <h4 className='mb-1'>{name}</h4>
          <p className='text-sm w-[150px] truncate'>{email}</p>
          <ul className='flex justify-center gap-5'>
            <li><Link to="#"><LiaUserCircle className='text-2xl'/></Link></li>
            <li><Link to="#"><LiaKeySolid className='text-2xl'/></Link></li>
            <li><button type='button' onClick={handleLogout}><LiaSignOutAltSolid className='text-2xl'/></button></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Top