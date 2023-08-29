import React from "react";
import BlogCard from "./BlogCard";
const BlogCardSec = () => {
  const handleCardClick = (cardId) => {
    window.location.href = `/blog/${cardId}`; // Use the correct route
  };

  return (
    <section id="blog-card-section">
      <div className="blog-c-sec-all">
        <div className="blog-c-text">
          <h4 className="gray">* Latest Articles</h4>
          <h1>OUR LATEST BLOG</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            consectetur odio eros. Quis cursus turpis aliquet bibendum. Aenean
            vestibulum magna sit amet tellus consectetur ultricies
          </p>
        </div>

        <BlogCard onCardClick={handleCardClick} />
      </div>
    </section>
  );
};

export default BlogCardSec;
