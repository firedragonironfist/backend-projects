//we have imported this file in reducers/index.js so export the functions
import * as api from "../api";

// Action Creators
// below we used redux-thunk to return a function instead of an object which is async
export const getBlogs = () => async (dispatch) => {
    try{
        const {data} = await api.fetchBlogs();
        dispatch({type: 'FETCH_ALL', payload: data});
    }catch(err){
        console.log(err.message);
    }
}

export const createBlog = (Blog) => async(dispatch) => {
    try{
        const {data} = await api.createBlog(Blog);

        dispatch({type: 'CREATE', payload: data});
    }catch(err){
        console.log(err.message);
    }
}