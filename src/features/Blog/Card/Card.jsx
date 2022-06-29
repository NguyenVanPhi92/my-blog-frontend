import { Link } from "react-router-dom";
import { getOneBlog } from "../../../app/apiRequest";
import auth from "../../../assets/images/author.png";
import blog from "../../../assets/images/blog-1.png";
import { useDispatch } from "react-redux";
import "./cardStyle.scss";

const Card = (props) => {
  const { blogData } = props;
  const dispatch = useDispatch();

  //handle
  const handleClickBlogDetail = (id) => {
    getOneBlog(id, dispatch);
    console.log("Blog id: ", id);
  };

  return (
    <div className="blog-card">
      {blogData?.map((item, index) => (
        <>
          <div className="blog-card-banner">
            <img
              src={item.image ? item.image : blog}
              width="250"
              alt=""
              className="blog-card-img"
            />
          </div>
          <div className="blog-content-wrapper">
            <button className="blog-topic text-tiny">{item.category}</button>
            <h3>
              <Link
                to={`article/${item._id}`}
                className="h3"
                onClick={() => handleClickBlogDetail(item._id)}
              >
                {item.title}
              </Link>
              <p
                className="blog-text"
                dangerouslySetInnerHTML={{
                  __html: item.content?.substring(0, 300) + "...",
                }}
              />

              <div className="wrapper-flex">
                <div className="profile-wrapper">
                  <img src={auth} alt="" />
                </div>

                <div className="wrapper">
                  <a href="/#" className="h4">
                    Julia Waker
                  </a>
                  <p className="text-sm">
                    <time datetime="2022-01-17">{item.created_at}</time>
                    <span className="separator"></span>
                    <ion-icon name="time-outline"></ion-icon>
                    <time datetime="PT3M">3 min</time>
                  </p>
                </div>
              </div>
            </h3>
          </div>
        </>
      ))}
    </div>
  );
};

export default Card;
