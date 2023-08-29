import React from "react";
import { useParams } from "react-router-dom";
import bheader from "../../Data/headerData";

const BlogSHeader = () => {
  const { cardId } = useParams();
  const selectedHeader = bheader.find(
    (header) => header.headerid === parseInt(cardId)
  );
  return (
    <div className="blog-c-wrapper">
      <div className="title-wrap">
        <div className="wrap">
          <h1>{selectedHeader ? selectedHeader.title : ""}</h1>
          <p>{selectedHeader ? selectedHeader.date : ""}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogSHeader;
