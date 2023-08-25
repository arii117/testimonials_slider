import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

const Card = (props) => {
    let review =props.review;
  return (
    <div className='flex flex-col md:relative'>
        <div className='absolute top-[-7rem] z-[10]'>
            <img className='aspect-square rounded-full w-[140px] h-[140px]  z-25' src={review.image} />
            <div className='rounded-full w-[140px] h-[140px]  z-[-10] top-[-6px] bg-slate-600 absolute'></div>
        </div>
        <div className='text-center mt-7'>
            <p className='font-bold text-2xl capitalize'>{review.name}</p>
        </div>
        <div className='text-center mt-7'>
            <p className='text-blue  uppercase text-sm'>{review.job}</p>
        </div>
        <div className='text-black-400 mx-auto mt-5'><FaQuoteLeft></FaQuoteLeft></div>
        <div className='text-black-200 mx-auto mt-5 text-center'>{review.text}</div>
        <div className='text-black-400 mx-auto mt-5'><FaQuoteRight></FaQuoteRight></div>

    </div>
  )
}

export default Card