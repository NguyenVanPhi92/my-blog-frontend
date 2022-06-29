import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllBlog } from "../../app/apiRequest";
import Card from "../Blog/Card/Card";
import "./style.scss";

const MyBlog = () => {
  const blogList = useSelector((state) => state.blog.getAllBlog.blogList);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllBlog(dispatch);
  }, []);

  return (
    <div className="container card-group">
      <div className="row">
        <div className="col">
          <Card blogData={blogList} />
        </div>
      </div>
    </div>
  );
};

export default MyBlog;
