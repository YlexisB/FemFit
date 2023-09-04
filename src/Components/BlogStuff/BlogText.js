import React from "react";
import { blogData } from "../../Data/BlogData";
import { BLOG_STUFF } from "../../constants";

const BlogText = ({ selectedBlog }) => {
  return (
    <section id="article-all">
      <div id="article">
        <div className="author-info">
          <img src={selectedBlog.authorImage} alt="Author" />
          <h4>
            {BLOG_STUFF.write}
            {selectedBlog.authorName}
          </h4>
        </div>
        <p>{selectedBlog.p1}</p>
        <p>
          <str>{selectedBlog.p2}</str>
        </p>
        <div className="image-text">
          <p>{selectedBlog.p3}</p>
          <img src={selectedBlog.blogImage} alt="" />
        </div>
        <p>{selectedBlog.p4}</p>
        <p>{selectedBlog.p5}</p>
        <div className="author-info-2">
          <img src={selectedBlog.authorImage} alt="Author" />
          <div className="author-more">
            <h2>{selectedBlog.authorName}</h2>
            <p>{selectedBlog.authorAbout}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogText;
