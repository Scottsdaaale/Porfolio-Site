import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
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

  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '200px',
    padding: '20px',
    margin: '5px',
    background: '#2b2b2b',
    borderRadius: '5px',
  };

  const imageContainerStyle = {
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const imageStyle = {
    width: '60px',
    height: '60px',
  };

  const titleContainerStyle = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '100px',
    flex: 1,
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  };

  const titleStyle = {
    margin: '0',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 4,
  };

  return (
    <Container style={{ maxWidth: '500px' }}>
      {posts
        .reduce((rows, post, idx) => {
          if (idx % 2 === 0) rows.push([]);
          rows[rows.length - 1].push(post);
          return rows;
        }, [])
        .map((row, rowIndex) => (
          <Row  key={rowIndex}>
            {row.map((post) => (
              <Col className='hoverable-div' key={post.id} sm>
                <Link
                  to={`/posts/${toKebabCase(post.id)}`}
                  
                  style={linkStyle}
                >
                  <div style={divStyle}>
                    <div style={imageContainerStyle}>
                      <img
                        src={post.image}
                        alt={post.title}
                        style={imageStyle}
                      />
                    </div>
                    <div style={titleContainerStyle}>
                      <h2 style={titleStyle}>{post.title}</h2>
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        ))}
    </Container>
  );
};

export default BlogList;
