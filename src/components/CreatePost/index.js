import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPost, clearEditingPost, updatePost } from '../../redux/postsSlice';
import ImageUpload from '../ImageUpload';
import "./index.css";

const CreatePost = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const editingPost = useSelector(state => state.posts.editingPost);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        if (editingPost) {
            setTitle(editingPost.title);
            setContent(editingPost.content);
            setImageUrl(editingPost.imageUrl || '');
        }
    }, [editingPost]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingPost) {
            dispatch(updatePost({ id: editingPost.id, title, content, imageUrl }));
            dispatch(clearEditingPost());
        } else {
            dispatch(addPost({ id: Date.now(), title, content, imageUrl }));
        }
        navigate('/');
    };

    return (
        <div className='create-post'>
            <h1>{editingPost ? 'Edit Post' : 'Create Post'}</h1>
            <form onSubmit={handleSubmit} className='create-post-form'>
                <div className='input-container d-flex flex-column text-start'>
                    <label className='label'>Name</label>
                    <input
                        type="text"
                        placeholder="Name"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className='name-input input'
                    />
                </div>
                <div className='input-container d-flex flex-column text-start'>
                    <label className='label'>Content</label>
                    <textarea
                        placeholder="Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        className='content-input input'
                    ></textarea>
                </div>
                <ImageUpload onImageUpload={setImageUrl} />
                <button type="submit" className="btn btn-primary mt-2">{editingPost ? 'Update Post' : 'Create Post'}</button>
            </form>
        </div>
    );
};

export default CreatePost;
