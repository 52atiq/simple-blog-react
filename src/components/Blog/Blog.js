import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = ({blog}) => {
    const navigate = useNavigate()
    const {_id, title,blog:blogBody, admin,imageURL,imageName} =blog;
    return (
        <div className='mx-30 flex gap-16 m-11'>
            <div className='blog-image'>
               <img className='w-80 h-58 border-4' src={imageURL} alt="" />
            </div>
            <div className='w-[500px]'>
                <div>
                    <h1 className='text-xl text-green-400 '>{title}</h1>
                    <div className='author'>
                      <img src="" alt="" />
                      <p className='text-lg text-sky-500 ml-8'>{admin}</p>
                    </div>
                </div>
                <p className='text-yellow-600'>
                    {blogBody.length <400 ? blogBody.length : blogBody.slice(0,400)}
                    <span className='font-bold cursor-pointer text-blue-600' onClick={() => navigate(`/blog/${_id}`)}> ...Read More</span>

                </p>

            </div>
        </div>
    );
};

export default Blog;