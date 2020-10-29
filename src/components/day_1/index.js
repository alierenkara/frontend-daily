import React from "react";
import "./assets/css/app.scss";

function Day_1() {
  return (
    <>
      <div className="search">
        <form>
          <div className="search--icon">
            <img src="imgs/search-icon.svg" />
          </div>
          <input placeholder="Start typing to search" />
        </form>
        <div className="populer--searches">
          <h6>Popular searches</h6>
          <ul>
            <li>
              <a href="#">Air Transport</a>
            </li>
            <li>
              <a href="#">Aviation</a>
            </li>
            <li class="active">
              <a href="#">Mekaniske Verksted</a>
            </li>
            <li>
              <a href="#">Port Authority</a>
            </li>
            <li>
              <a href="#">Sporvei</a>
            </li>
            <li>
              <a href="#">Bergens Kreditbank</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="search--filter">
        <form>
          <div className="input--box">
            <div className="search--icon">
              <img src="imgs/search-icon.svg"></img>
            </div>
            <input placeholder="Start typing to search"></input>
          </div>
          <div className="filters">
            <ul>
              <li>
                <label>
                  <input type="radio" name="type" value="project" />
                  <span className="text">Projects</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="type" value="image" />
                  <span className="text">Images</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="type" value="people" />
                  <span className="text">People</span>
                </label>
              </li>
            </ul>
          </div>
        </form>
      </div>

      <div className="option--filter">
        <form>
          <ul>
            <li>
              <div className="key">Country</div>
              <div className="value">
                <select>
                  <option>Norway</option>
                  <option>Turkey</option>
                  <option>Germany</option>
                  <option>England</option>
                </select>
              </div>
            </li>
            <li>
              <div className="key">City</div>
              <div className="value">
                <input value="Bergen" />
              </div>
            </li>
            <li className="filter--buttons">
              <a href="#">Cancel</a>
              <button type="submit">Apply Filters</button>
            </li>
          </ul>
        </form>
      </div>
    </>
  );
}

export default Day_1;
