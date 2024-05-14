import React from 'react'
import useQueryData from '../../../../custom-hook/useQueryData';
import SpinnerFetching from '../../../../partials/spinners/SpinnerFetching';
import { devBaseImgUrl } from '../../../../helpers/functions-general';

const Services = () => {
  const {
    isLoading,
    isFetching,
    error,
    data: services,
  } = useQueryData(
    "/v1/services", // endpoint
    "get", // method
    "services", // key

  );
  return (
    <div className='wrapper'>
        <h1 className='text-4xl text-white font-semibold'>Services</h1>
        {isLoading ? <SpinnerFetching/> : (
          <div className='skills-wrapper flex flex-wrap items-center gap-10 justify-center py-3'>
            {services?.data.map((item, key) => (
              <div className='skills-card bg-white rounded-xl flex flex-col items-center w-[221.61px]' key={key}>
                <img src={`${devBaseImgUrl}/services/${item.services_image}`} alt="" className='size-[180px] object-cover'/>
                <div className='px-3 bg-black rounded-b-lg opacity-0'>
                  <h2 className='mt-2 text-white'>{item.services_title}</h2>
                </div>
              </div>
            ))}

          </div>
        )}
    </div>
  )
}

export default Services
