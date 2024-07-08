import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deletePost, setEditingPost } from '../../redux/postsSlice';
import PostItem from '../PostItem';
import ThemeToggle from '../ThemeToggle';
import "./index.css";

const PostsDisplay = () => {
    const posts = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEdit = (post) => {
        dispatch(setEditingPost(post));
        navigate('/edit');
    };
    const handleRemove=(post)=>{
        dispatch(deletePost(post));
    }
    return (
        <div className='display-container text-center w-100'>
            <h1>Posts</h1>
            <button onClick={() => navigate('/create')} className='btn btn-primary m-2'>Create Post</button>
            <ThemeToggle/>
            <div className='row mt-2 d-flex justify-content-center'>
                {posts.map(post => (
                        <PostItem key={post.id} post={post} onEdit={handleEdit} onRemove={handleRemove}/>
                ))}
            </div>
        </div>
    );
};

export default PostsDisplay;
