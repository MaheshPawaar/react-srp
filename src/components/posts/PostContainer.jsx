import React, { useEffect, useState } from 'react';
import PostsList from './PostsList';

const PostContainer = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostsData = async () => {
      try {
        const postsResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts`
        );
        const postRes = await postsResponse.json();

        setPosts(postRes);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchPostsData();
  }, []);
  return <PostsList posts={posts}/>;
};

export default PostContainer;
