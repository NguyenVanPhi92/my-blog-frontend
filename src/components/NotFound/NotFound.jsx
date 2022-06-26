import React from "react";
import "./scss/styles.scss";
import ghost from "./img/ghost-img.png";

const NotFound = () => {
  return (
    <>
      <main className="main">
        <section className="home">
          <div className="home__container container">
            <div className="home__data">
              <span className="home__subtitle">Error 500</span>
              <h1 className="home__title">Hey Buddy</h1>
              <p className="home__description">
                Xin lỗi bạn <br />
                vì trang này chưa hoàn thiện
              </p>
              <a href="/#" className="home__button">
                {" "}
                Go Home{" "}
              </a>
            </div>

            <div className="home__img">
              <img src={ghost} alt="" />
              <div className="home__shadow"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default NotFound;
