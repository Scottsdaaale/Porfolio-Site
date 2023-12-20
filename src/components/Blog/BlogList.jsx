import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setVisitedRoot } from "../../redux/visitedSlice";
import posts from "./posts";
import useDocumentTitle from "../Tools/useDocumentTitle";
import useScrollAndDispatch from "../Tools/useScrollAndDispatch";
import { toKebabCase } from "../Tools/toKebabCase";

const BlogList = () => {
  const dispatch = useDispatch();

  useDocumentTitle("Blog");

  useScrollAndDispatch(dispatch, setVisitedRoot(true));

  const groupedPosts = [];

  for (let i = 0; i < posts.length; i += 3) {
    groupedPosts.push(posts.slice(i, i + 3));
  }

  return (
    <Container style={{ maxWidth: "500px"}}>
      <h1>All Blog Posts</h1>
      {groupedPosts.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          {row.map((post) => (
            <Link
              to={`/posts/${toKebabCase(post.id)}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "30%",
              }}
              key={post.id}
            >
              <div
                style={{
                  background: "#2b2b2b",
                  borderRadius: "5px",
                  height: "200px",
                  maxHeight: "200px",
                  padding: "20px",
                }}
              >
                <img src={post.image} alt={post.title} width="40" height="40" />
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </Container>
  );
};

export default BlogList;
