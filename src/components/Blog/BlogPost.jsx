import React from "react";
import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import { setVisitedRoot } from "../../redux/visitedSlice";
import { useParams } from "react-router-dom";
import useScrollAndDispatch from '../Tools/useScrollAndDispatch';
import posts from "./posts";

const BlogPost = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);

  useScrollAndDispatch(dispatch, setVisitedRoot(true));

  // Find the post with the matching ID
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return <div>Post not found!</div>;
  }

  // Function to render content using dangerouslySetInnerHTML
  const renderHTMLContent = () => {
    return { __html: post.content };
  };

  return (
    <Container>
      <img src={post.image} alt={post.title} width="70" height="70" />
      <h2>{post.title}</h2>
      <div dangerouslySetInnerHTML={renderHTMLContent()} />
    </Container>
  );
};

export default BlogPost;