import React, { useContext, useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import { BlogContext } from '../../App';

const Home = () => {
    // const [blogs, setBlogs] = useState([]);
    const [blogs, setBlogs] = useContext(BlogContext)

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    },[])
    return (
        <div className='mx-44'>
            
            {
                blogs.map((blog, index) => (<Blog key={index} blog={blog} /> ))
            }
        </div>
    );
};

export default Home;