import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../redux/blogSlice";
import { setVisitedRoot } from "../../redux/visitedSlice";
import postsData from "./posts";
import useDocumentTitle from "../Tools/useDocumentTitle";

const BlogList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.blog.posts);
  useDocumentTitle("Blog");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(setVisitedRoot(true));
  }, [dispatch]);

  useEffect(() => {
    // Simulate fetching blog posts from the imported data
    dispatch(setPosts(postsData));
  }, [dispatch]);

  return (
    <Container>
      <h1>All Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <img src={post.image} alt={post.title} width="40" height="40" />
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <Link to={`/posts/${post.id}`}>Read more</Link>
        </div>
      ))}
    </Container>
  );
};

export default BlogList;
