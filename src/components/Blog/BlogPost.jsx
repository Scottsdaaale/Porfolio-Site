import React from "react";
import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import { setVisitedRoot } from "../../redux/visitedSlice";
import { useParams } from "react-router-dom";
import useScrollAndDispatch from '../Tools/useScrollAndDispatch';
import posts from "./posts"; 
import  Seo  from '../Tools/Seo.jsx'
import { toKebabCase } from "../Tools/toKebabCase";


const BlogPost = () => {
  const dispatch = useDispatch();
  useScrollAndDispatch(dispatch, setVisitedRoot(true));

  const { id } = useParams();
  const kebabCaseId = toKebabCase(id);
  let post = posts.find((post) => toKebabCase(post.id) === kebabCaseId);

  if (!post) {
    return <div>Post not found!</div>;
  }

  const renderHTMLContent = () => {
    return { __html: post.content };
  };

  return (
    <Container style={{ maxWidth: "500px" }}>
      <Seo
      title={post.title}
      description={post.description}
      name={post.name}
      type={post.type}
      imageUrl={post.imageUrl}
    
      />
      <img src={post.image} alt={post.title} style={{ width: "70px", height: "70px" }} />
      <h1 style={{ paddingTop: "20px", paddingBottom: "20px"}}>{post.title}</h1>
      <div
        dangerouslySetInnerHTML={renderHTMLContent()}
      />
    </Container>
  );
};

export default BlogPost;