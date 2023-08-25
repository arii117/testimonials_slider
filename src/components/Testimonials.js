import {useState} from 'react';
import Card from './Card';
import reviews from '../data';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';

const Testimonials = (props) => {
   
let reviews=props.reviews;
const[index,setIndex]=useState(0);

function leftShiftHandler()
{
    if(index-1<0)
    {
        setIndex(reviews.length-1);
    }
    else{
        setIndex(index-1);
    }
    return setIndex;

}
function rightShiftHandler(){
    if(index+1>=reviews.length-1)
    {
        setIndex(0);
    }
    else{
        setIndex(index+1);
    }
    return setIndex;

}
function surpriseHandler(){
    let  randomIndex=Math.floor(Math.random()* reviews.length);
    setIndex(randomIndex);
}










  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex-col justify-center items-center mt-10 p-10 transition-all duration-300 hover:shadow-lg'><Card review={reviews[index]}>
        </Card>
      
        <div className='flex text-3xl mt-5 gap-3 text-black-400 font-bold mx-auto '>
            <button onClick={leftShiftHandler} className='cursor-pointer hover:text-black-900 mx-auto'><FaChevronLeft></FaChevronLeft></button>
            <button onClick={rightShiftHandler} className='cursor-pointer hover:text-black-900 mx-auto'><FaChevronRight></FaChevronRight></button>
        </div>
        <div className=''>
            <button onClick={surpriseHandler} className='bg-slate-500 hover:bg-slate-900 transition-all duration-200 cursor-pointer px-10 py-2 font-bold text-white text-lg rounded-3xl'>Surprise Me</button>
        </div>
    </div>
  )
}

export default Testimonials