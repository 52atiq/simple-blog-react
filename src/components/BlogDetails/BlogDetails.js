import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BlogContext } from '../../App';

const BlogDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [blogs] = useContext(BlogContext)
    
    const blog = blogs.find( blog => blog._id == id);
    console.log(blog);

    return (
        <>
          {/* <div className='bg-blue-900 h-48'> hi </div> */}
        <div>
            {/* <button className='bg-blue-900  w-full absolute z-[-9] ' onClick={()=> navigate(-1)}> */}
              {/* <p className='mt-0 text-red-400 flex h-52 p-3'>Back</p> */}
              <button className='bg-blue-600 w-full' onClick={()=> navigate(-1)}>
              <p className='flex h-52'> Back </p>
              </button>
             
            {/* </button> */}
              
            <div className=' '>
               <div className=' flex justify-center'>
                <img className='w-72 h-80 border-8 object-cover'  src={blog?.imageURL} alt="" />
               </div>
              <div className='mx-24'>
              <h1 className='text-blue-500 font-mono text-xl m-8 justify-center flex'>{blog.title}</h1>
               <p className='"flex items-center justify-center h-screen text-justify'>{blog.blog}</p>
              </div>
            </div>

        </div>
         </>
    );
};

export default BlogDetails;