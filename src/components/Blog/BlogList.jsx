import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setVisitedRoot } from "../../redux/visitedSlice";
import posts from "./posts";
import useDocumentTitle from "../Tools/useDocumentTitle";
import useScrollAndDispatch from "../Tools/useScrollAndDispatch";

const BlogList = () => {
  const dispatch = useDispatch();

  useDocumentTitle("Blog");

  useScrollAndDispatch(dispatch, setVisitedRoot(true));

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
