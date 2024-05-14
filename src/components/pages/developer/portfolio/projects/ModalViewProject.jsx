import React from 'react'
import { FaGithub, FaTimesCircle } from 'react-icons/fa';
import { StoreContext } from '../../../../../store/StoreContext';
import { setIsShow } from '../../../../../store/StoreAction';


const ModalViewProject = ({info}) => {
    const {dispatch} = React.useContext(StoreContext)
    const handleClose = () => dispatch(setIsShow(false))
  return (
    <>
        <div className='relative isolate'>
            <div className='backdrop h-[51rem] w-[85rem] top-[-53rem] left-[6rem] bg-[#2D4356]/80 -z-[999] absolute rounded-3xl'></div>
                <button onClick={handleClose}><FaTimesCircle className='text-white text-4xl absolute top-[-51rem] right-[8rem]'/></button>
                <div className='absolute top-[-48rem] left-[8rem] w-[65vw]'>
                    <h1 className='text-3xl text-white font-semibold'>{info.project_title}</h1>
                    <div className='flex'>
                        <img src="../../img/project/modal-yt1.png" alt="" className='object-fit'/>
                    </div>
                        
                </div> 
        </div>
    </>
  )
}

export default ModalViewProject

// color black top13rem right 5rem top-40rem top-39rem