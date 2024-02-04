import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogPost = () => {
  const { slug } = useParams();

  return (
    <div>
      <Header />
      <h1>{slug}</h1>
      {/* Fetch and display the content of the blog post */}
      <p>This is the content of the {slug} post.</p>
      <Footer />
    </div>
  );
};

export default BlogPost;
