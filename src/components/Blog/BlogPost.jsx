import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVisitedRoot } from "../../redux/visitedSlice";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const dispatch = useDispatch();
  const { id } = useParams(); // Get the 'id' parameter from the URL
  const posts = useSelector((state) => state.blog.posts);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(setVisitedRoot(true));
  }, [dispatch]);

  // Find the post with the matching ID
  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found!</div>;
  }

  return (
    <div>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>

      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
