import React from "react";
import BlogCard from "./BlogCard";
import { BLOG_STUFF } from "../../constants";

const BlogCardSec = () => {
  const handleCardClick = (cardId) => {
    window.location.href = `/FemFitGym/#/blog/${cardId}`; // Use the correct route
  };

  return (
    <section id="blog-card-section">
      <div className="blog-c-sec-all">
        <div className="blog-c-text">
          <h4 className="gray">{BLOG_STUFF.subTitle}</h4>
          <h1>{BLOG_STUFF.title}</h1>
          <p>{BLOG_STUFF.titleP}</p>
        </div>

        <BlogCard onCardClick={handleCardClick} />
      </div>
    </section>
  );
};

export default BlogCardSec;
