import React from "react";
import Navbar from "../Components/Navbar";
import BlogText from "../Components/BlogStuff/BlogText";
import Join from "../Components/Join";

const BlogSite = () => {
  return (
    <section>
      <div id="blog-site">
        <Navbar />

        <div className="blog-c-wrapper">
          <div className="title-wrap">
            <div className="wrap">
              <h1>
                "Together, we sculpt not just bodies but also unbreakable
                spirits"
              </h1>
              <p> August 11, 2023 -- The Art of Women's Strength Training</p>
            </div>
          </div>
        </div>
      </div>
      <BlogText />
      <Join />
    </section>
  );
};

export default BlogSite;
