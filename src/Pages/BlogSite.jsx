import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import BlogText from "../Components/BlogStuff/BlogText";
import Join from "../Components/Join";
import BlogSHeader from "../Components/BlogStuff/BlogSHeader";
import { blogData } from "../Data/BlogData";

const BlogSite = () => {
  const { cardId } = useParams();

  const selectedBlog = blogData.find(
    (blog) => blog.cardId === parseInt(cardId)
  );

  return (
    <section>
      <div id="blog-site">
        <Navbar />

        <BlogSHeader />
      </div>
      {selectedBlog ? (
        <BlogText selectedBlog={selectedBlog} />
      ) : (
        <p>Blog post not found</p>
      )}
      <Join />
    </section>
  );
};

export default BlogSite;
