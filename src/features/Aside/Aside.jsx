import React from "react";
import "./style.scss";

const Aside = () => {
  return (
    <div className="aside">
      <div className="topics">
        <h2 className="h2">Topics</h2>
        <a href="/#" className="topic-btn">
          <div className="icon-box">
            <ion-icon name="server-outline"></ion-icon>
          </div>
          <p>Database</p>
        </a>

        <a href="/#" className="topic-btn">
          <div className="icon-box">
            <ion-icon name="accessibility-outline"></ion-icon>
          </div>
          <p>Accessibility</p>
        </a>

        <a href="/#" className="topic-btn">
          <div className="icon-box">
            <ion-icon name="rocket-outline"></ion-icon>
          </div>
          <p>Web Performance</p>
        </a>
      </div>

      <div className="tags">
        <h2 className="h2">Tags</h2>
        <div className="wrapper">
          <button className="hashtag">#mongoDB</button>
          <button className="hashtag">#nodeJs</button>
          <button className="hashtag">#ally</button>
          <button className="hashtag">#mobility</button>
          <button className="hashtag">#inclusion</button>
          <button className="hashtag">#webperf</button>
          <button className="hashtag">#optimize</button>
          <button className="hashtag">#performance</button>
        </div>
      </div>

      {/* <!--Contact--> */}
      <div className="contact tags">
        <ul className="social-link">
          <li>
            <a href="/#" className="icon-box discord">
              <ion-icon name="logo-discord"></ion-icon>
            </a>
          </li>

          <li>
            <a href="/#" className="icon-box twitter">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com/Phipinto"
              target="/new"
              className="icon-box facebook"
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li>
            <a href="/#" className="icon-box linkedin">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/NguyenVanPhi92"
              target="/new"
              className="icon-box github"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
        </ul>
      </div>

      <div className="newsletter tags">
        <h2 className="h2">Newsletter</h2>

        <div className="wrapper">
          <p>
            Subscribe to our newsletter to be among the first to keep up with
            the latest updates.
          </p>

          <form action="#">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Aside;
