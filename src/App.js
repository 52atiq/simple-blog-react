
import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import BlogDetails from './components/BlogDetails/BlogDetails';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import Signup from './components/Signup/Signup';
import Videos from './components/Videos/Videos';

export const BlogContext = createContext()

function App() {
  const [blogs, setBlogs] = useState([])

  return (
    <BlogContext.Provider value={[blogs, setBlogs]}>
    <Navbar> </Navbar>
    <Routes>
      <Route path='/' element={<Home> </Home>}></Route>
      <Route path='/videos' element={<Videos></Videos>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<Signup> </Signup>}></Route>
      <Route path='/blog/:id' element={<BlogDetails> </BlogDetails>}> </Route>
      <Route path='*'  element={<NotFound> </NotFound>}></Route>
    </Routes>
    </BlogContext.Provider>
   
  );
}

export default App;



