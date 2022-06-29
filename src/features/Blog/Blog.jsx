import React, { useEffect, useState } from "react";
import Aside from "../Aside/Aside";
import { useSelector, useDispatch } from "react-redux";
import "./style.scss";
import Card from "./Card/Card";
import { getAllBlog } from "../../app/apiRequest";

const Blog = () => {
  const blogList = useSelector((state) => state.blog.getAllBlog.blogList);
  const dispatch = useDispatch();
  console.log("blog list: ", blogList);

  useEffect(() => {
    getAllBlog(dispatch);
  }, []);

  return (
    <div className="main">
      <div className="container">
        <div className="blog">
          <h2 className="h2">Latest Blog Post</h2>
          <div className="blog-card-group">
            <Card blogData={blogList} />
          </div>
        </div>

        <div className="aside">
          <Aside />
        </div>
      </div>
    </div>
  );
};

export default Blog;
