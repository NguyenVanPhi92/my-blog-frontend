import React, { useEffect, useState } from "react";
import Aside from "../Aside/Aside";
import "./style.scss";
import Card from "../../components/BlogCard/Card";
import axios from "axios";

const Blog = () => {
  const [blogData, setBlogData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8000/v1/post-article")
      .then((response) => {
        setBlogData(response.data);
      })
      .catch((error) => {
        console.log("Error Blog: ", error);
      });
  }, []);

  return (
    <div className="main">
      <div className="container">
        <div className="blog">
          <h2 className="h2">Latest Blog Post</h2>
          <div className="blog-card-group">
            <Card blogData={blogData} />
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
