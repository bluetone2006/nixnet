import React from "react";
import { Link } from "react-router-dom";
import "./Web19204.css";

function Web19204(props) {
  const { title, place, preview, welcomeToTheNixne } = props;

  return (
    <div className="container-center-horizontal">
      <div className="web-1920-4 screen">
        <div className="overlap-group1">
          <div className="overlap-group">
            <div className="rectangle-1"></div>
            <h1 className="title patron-bold--bold-white-108px">{title}</h1>
            <Link to="/web-1920-5">
              <div className="rectangle-6"></div>
            </Link>
            <div className="place patron-bold--bold-white-40px">{place}</div>
            <div className="preview patron-bold--bold-white-40px">{preview}</div>
            <div className="welcome-to-the-nixne">{welcomeToTheNixne}</div>
          </div>
          <div className="rectangle-7"></div>
        </div>
      </div>
    </div>
  );
}

export default Web19204;
