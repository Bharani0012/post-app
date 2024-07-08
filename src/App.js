import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./App.css";
import CreatePost from './components/CreatePost';
import PostsDisplay from './components/PostsDisplay';
import { loadPosts } from './redux/postsSlice';

const App = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  console.log(isDarkTheme)
  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <div className={`container-fluid ${isDarkTheme ? 'overall-container app dark-mode' : 'overall-container app light-mode'}`}>
        <Router>
          <Routes>
            <Route path="/" element={<PostsDisplay />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/edit" element={<CreatePost />} />
          </Routes>
      </Router>
    </div>
  );
};

export default App;
