import React from 'react'
import { FaHtml5, FaReact } from 'react-icons/fa6';
import { SiTailwindcss } from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
import ModalViewProject from './ModalViewProject';
import { baseImgUrl, devBaseImgUrl } from '../../../../helpers/functions-general';
import { StoreContext } from '../../../../../store/StoreContext';
import { setIsShow } from '../../../../../store/StoreAction';
import useQueryData from '../../../../custom-hook/useQueryData';
import SpinnerFetching from '../../../../partials/spinners/SpinnerFetching';

const Projects = () => {
    const {store, dispatch} = React.useContext(StoreContext)
    const [info, setInfo] = React.useState(null)
    const handleShowMore = (item) => {
        dispatch(setIsShow(true))
        setInfo(item)
    }

    const {
        isLoading,
        isFetching,
        error,
        data: portfolio,
      } = useQueryData(
        "/v1/portfolio", // endpoint
        "get", // method
        "portfolio", // key

      );
      
  return (
    <div className='mt-20 wrapper'>
        <h1 className='text-4xl text-white px-2 font-semibold'>Projects</h1>
        {isLoading ? <SpinnerFetching/> : (
            <div className='flex flex-wrap justify-center items-center gap-[2rem] transition-all py-7'>
                {portfolio?.data.map((item, key) => (
                    <div className='project-card p-4 w-[20rem] flex flex-col items-center gap-2 opacity-100 transition-all text-black bg-white/65 rounded-2xl hover:bg-white' key={key}>
                        <img src={`${devBaseImgUrl}/project/${item.portfolio_image}`} alt="" className='object-contain h-[10rem]'/>
                        <div className='flex flex-col w-full items-center'>
                            <h1 className='text-xl text-black text-center'>{item.portfolio_title}</h1>
                            <div className='flex gap-2'>
                                <p className='truncate'>{item.portfolio_description}</p>
                                <p>{item.portfolio_publish_date}</p>
                            </div>
                            
                            <ul className='flex items-center justify-center gap-3'>
                                <li><FaHtml5 className='proj-icons'/></li>
                                <li><SiTailwindcss className='proj-icons'/></li>
                                <li><RiJavascriptLine className='proj-icons'/></li>
                                <li><FaReact className='proj-icons'/></li>
                            </ul>
                        </div>
                        <button className='btn--view mt-2 px-7 py-1 rounded-xl border border-line' onClick={() => handleShowMore(item)}>View More</button>
                    </div>
                ))}        
            </div>
        )}
        {store.isShow && <ModalViewProject info={info}/>}
    </div>
  )
}

export default Projects
