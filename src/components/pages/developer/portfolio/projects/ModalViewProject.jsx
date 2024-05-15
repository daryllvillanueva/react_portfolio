import React from 'react'
import { FaGithub, FaTimesCircle } from 'react-icons/fa';
import { StoreContext } from '../../../../../store/StoreContext';
import { setIsShow } from '../../../../../store/StoreAction';
import { devBaseImgUrl } from '../../../../helpers/functions-general';
import ModalWrapper from '../../../../partials/modals/ModalWrapper';


const ModalViewProject = ({info}) => {
    const {dispatch} = React.useContext(StoreContext)
    const handleClose = () => dispatch(setIsShow(false))
  return (
    <>
        <ModalWrapper position="center">
            <button onClick={handleClose}><FaTimesCircle className='text-white text-4xl absolute top-1/4 right-1/4'/></button>
            <h1 className='text-3xl text-white font-semibold'>{info.portfolio_title}</h1>
            <div className='flex'>
                <img src={`${devBaseImgUrl}/project/${info.portfolio_image}`}alt="" className='object-contain'/>
            </div>
        </ModalWrapper>
    </>
  )
}

export default ModalViewProject

// color black top13rem right 5rem top-40rem top-39rem