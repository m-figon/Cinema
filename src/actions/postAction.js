import {FETCH_POSTS, NEW_POST} from './type';

export const fetchPosts = () => dispatch => {
    //fetch('https://jsonplaceholder.typicode.com/posts')
    //  .then(res => res.json())
     // .then(posts =>
        dispatch({
          type: FETCH_POSTS,
         // payload: posts
         payload: "hello there"
        })
     // );

  };
  export const createPost = (value) => dispatch => {
    //fetch('https://jsonplaceholder.typicode.com/posts')
    //  .then(res => res.json())
     // .then(posts =>
        dispatch({
          type: FETCH_POSTS,
         // payload: posts
         payload: value
        })
     // );

  };