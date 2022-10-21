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

  const [posts, setPosts] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  
  const history = useNavigate();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getPosts();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {id, title:postTitle, datetime, body: postBody};
    try {
      const response = await api.post('/posts', newPost);
      setPosts( [...posts, response.data] );
      setPostTitle('');
      setPostBody('');
      history('/');
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleDelete = async id => {    
    try {
      await api.delete(`/posts/${id}`);
      setPosts(posts.filter(post => post.id !== id));
      history('/');
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="App">  
        <Header />
          <Routes>
            <Route path='/' element={ <Home posts={posts} /> } />
            <Route path='/post' element={<NewPost handleSubmit={handleSubmit} postTitle={postTitle} postBody={postBody} />} />
            <Route path='/post/:id' element={<PostPage posts={posts} handleDelete={handleDelete}/>} />
            <Route path='/edit/:id' element={<EditPost /> } />
          </Routes>
        <Footer />
    </div>
  )
}

export default App;