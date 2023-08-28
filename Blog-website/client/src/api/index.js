import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchBlogs = () => axios.get(url);
export const createBlog = (newBlog) => axios.post(url, newBlog);