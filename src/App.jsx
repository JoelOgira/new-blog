import { Routes, Route, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import format from 'date-fns/esm/fp/format/index.js';
import api from './api/posts'
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NewPost from './Components/NewPost';
import Home from './Components/Home';
import PostPage from './Components/PostPage';
import EditPost from './Components/EditPost';



const App = () => {
  return (
    <div className="App">  
        <Header />
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/post' element={<NewPost />} />
            <Route path='/post/:id' element={<PostPage />} />
            <Route path='/edit/:id' element={<EditPost /> } />
          </Routes>
        <Footer />
    </div>
  )
}

export default App;