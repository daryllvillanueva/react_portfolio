import React from 'react'
import { Link } from 'react-router-dom'
import { baseImgUrl, devBaseImgUrl } from '../../../../helpers/functions-general';
import useQueryData from '../../../../custom-hook/useQueryData';
import SpinnerFetching from '../../../../partials/spinners/SpinnerFetching';


const Skills = () => {
  const {
    isLoading,
    isFetching,
    error,
    data: skills,
  } = useQueryData(
    "/v1/skills", // endpoint
    "get", // method
    "skills", // key

  );
  return (
    <div className='mt-20 wrapper'>
        <h1 className='text-4xl text-white px-2 font-semibold mb-5'>My Skills</h1>
        {isLoading ? <SpinnerFetching/> : (
          <div className='skills-wrapper flex flex-wrap items-center gap-5 p-3 justify-center'>
            {skills?.data.map((item,key) => (
              <div key={key} className='bg-white rounded-xl p-4'>
                  <Link to="" target='_blank'><img src={`${devBaseImgUrl}/skills/${item.skills_image}`} alt="" className='skills-img'/></Link>
                </div>
            ))}
          </div>
        )}

    </div>
  )
}

export default Skills

