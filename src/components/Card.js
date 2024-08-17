import React from 'react'
import {FcLike} from 'react-icons/fc';
import { toast } from "react-toastify";
import { FcLikePlaceholder } from "react-icons/fc";

const Card = (props) => {
    let course=props.course;
    let likedCourses=props.likedCourses;
    let setLikedCourses=props.setLikedCourses;

    function clickHandler(){
        // logic
        if(likedCourses.includes(course.id)){
            // pehle se liked hua pada hai 
            setLikedCourses((prev) => prev.filter( (cid)=>(cid!==course.id) ) );
            toast.warning("Course removed from favorites");

        }
        else{ 
            // pehle se nahi liked hua
            // insert krna hai ye course liked courses me
            if(likedCourses.length===0){
                // jab empty hai toh aise insert krte hai 
                setLikedCourses([course.id])

            }
            else{
                // non-empty pehle se hain
                // iss case me jo prev state wala tha wo pura insert kiya saath me ye naya wala course ka id bhi 
                setLikedCourses((prev)=>([...prev,course.id]));

            }
            toast.success("Liked successfully")

        }

    }
  return (
    <div className=' w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden  '>
        <div className='relative'>
            <img src={course.image.url} alt="" />

            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] flex  justify-center items-center  '>
                <button onClick={clickHandler} >
                    {
                        likedCourses.includes(course.id) ? 
                        (<FcLike fontSize="1.75rem" />)
                        :(<FcLikePlaceholder fontSize="1.75rem" />)
                    }  
                </button>
            </div>

        </div>

        

        <div className='p-4'>
            <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
            <p className='mt-2 text-white'>
                {
                    course.description.length>100 ? (course.description.substr(0,100) + "...") : (course.description)
                }
            </p>
        </div>
      
    </div>
  )
}

export default Card
