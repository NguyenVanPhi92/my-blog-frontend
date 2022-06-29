import React from "react";
import { useSelector } from "react-redux";

const Detail = () => {
  const blog = useSelector((state) => state.blog.getOneBlog.currentBlog);

  return <div>{blog.title}</div>;
};

export default Detail;
