import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Card from "../../components/BlogCard/Card";
import "./style.scss";

const MyBlog = () => {
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
    <div className="container card-group">
      <div className="row">
        <div className="col">
          <Card blogData={blogData} />
        </div>
      </div>
    </div>
  );
};

export default MyBlog;
