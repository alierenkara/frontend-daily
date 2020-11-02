import React from "react";
import "./assets/css/app.scss";

function Day_2() {
  return (
    <>
      <div className="header">
        <header>
          <div className="container">
            <div className="logo">
              <img src="/imgs/linkedin.png"></img>
            </div>
            <div className="search--input">
              <i className="icon-search" />
              <input placeholder="Search..."></input>
            </div>
            <div className="menu">
              <ul>
                <li className="active">
                  <a href="#">
                    <i className="icon-home" />
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-users" />
                    <span>Users</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-briefcase" />
                    <span>Jobs</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-message" />
                    <span>Messages</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-notification" />
                    <span>Notifications</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-grid" />
                    <span>More</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="profile">
              <a href="#">
                <div className="profile--name">
                  <span className="name">Cameron Williamson</span>
                  <span className="status">Online</span>
                </div>
                <img src="imgs/avatar.png"></img>
                <i className="icon-down-open" />
              </a>
            </div>
          </div>
        </header>
      </div>

      <div className="profile--card">
        <div className="profile--container">
          <img className="banner" src="imgs/banner.png"></img>
          <img className="avatar" src="imgs/avatar-2.png"></img>
        </div>
        <div className="name--container">
          <span className="name">Cameron Williamson</span>
          <span className="title">Business Analyst</span>
        </div>
        <div className="analysis--container">
          <ul>
            <li>
              <span className="text">Who viewed your profile</span>
              <span className="count">90</span>
            </li>
            <li>
              <span className="text">Views of your post</span>
              <span className="count">627</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Day_2;
