import { createSlice } from '@reduxjs/toolkit';

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        editingPost: null,
    },
    reducers: {
        addPost: (state, action) => {
            //console.log(action)
            state.posts.push(action.payload);
            localStorage.setItem('posts', JSON.stringify(state.posts));
        },
        updatePost: (state, action) => {
            const index = state.posts.findIndex(post => post.id === action.payload.id);
            if (index !== -1) {
                state.posts[index] = action.payload;
                localStorage.setItem('posts', JSON.stringify(state.posts));
            }
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload.id);
            localStorage.setItem('posts', JSON.stringify(state.posts));
        },
        setEditingPost: (state, action) => {
            state.editingPost = action.payload;
        },
        clearEditingPost: (state) => {
            state.editingPost = null;
        },
        loadPosts: (state) => {
            const savedPosts = JSON.parse(localStorage.getItem('posts'));
            if (savedPosts) {
                state.posts = savedPosts;
            }
        },
    },
});

export const { addPost, updatePost, deletePost, setEditingPost, clearEditingPost, loadPosts } = postsSlice.actions;
export default postsSlice.reducer;
