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
    </>
  );
}

export default Day_2;
