import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setVisitedRoot } from '../../redux/visitedSlice';
import posts from './posts';
import useDocumentTitle from '../Tools/useDocumentTitle';
import useScrollAndDispatch from '../Tools/useScrollAndDispatch';
import { toKebabCase } from '../Tools/toKebabCase';

const BlogList = () => {
  const dispatch = useDispatch();

  useDocumentTitle('Blog');

  useScrollAndDispatch(dispatch, setVisitedRoot(true));

  const groupedPosts = [];

  for (let i = 0; i < posts.length; i += 3) {
    groupedPosts.push(posts.slice(i, i + 3));
  }

  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'space-between',
    height: '200px',
    maxHeight: '200px',
    padding: '20px',
  };

  const imageStyle = {
    width: '60px',
    height: '60px',
    alignSelf: 'center', // Align the image within the flex container
  };

  const titleStyle = {
    paddingTop: '10px',
    textAlign: 'center',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 4,
    textOverflow: 'ellipsis',
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
  };

  return (
    <Container style={{ maxWidth: '500px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          // margin: '10px',
          gap: '50px',
        }}
      >
        {groupedPosts.map((row, rowIndex) =>
          row.map((post) => (
            <Link
              to={`/posts/${toKebabCase(post.id)}`}
              className='hoverable-div'
              style={{
                textDecoration: 'none',
                color: 'inherit',
                width: '100%',
                background: '#2b2b2b',
                borderRadius: '5px',
              }}
              key={post.id}
            >
              <div style={divStyle}>
                <img src={post.image} alt={post.title} style={imageStyle} />
                <h2 style={titleStyle}>{post.title}</h2>
              </div>
            </Link>
          ))
        )}
      </div>
    </Container>
  );
};

export default BlogList;
