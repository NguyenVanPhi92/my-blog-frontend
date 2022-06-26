import { Link } from "react-router-dom";
import auth from "../../assets/images/author.png";
import blog from "../../assets/images/blog-1.png";
import "./style.scss";

const Card = (props) => {
  const { blogData } = props;

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
              <Link to={`article/detail`} className="h3">
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
