import React from "react";
import { Link } from "react-router-dom";
import "./Web19205.css";

function Web19205(props) {
  const {
    nixnetTv,
    preview,
    aPreviewOfNixnet,
    nixnetTvPreview1,
    nixnetTvPreview2,
    availableFrom314,
    season11,
    season12,
    place,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="web-1920-5 screen">
        <div className="overlap-group3">
          <div className="overlap-group-1">
            <div className="rectangle-1-1"></div>
            <div className="rectangle-2"></div>
            <div className="nixnettv patron-bold--bold-white-108px">{nixnetTv}</div>
            <div className="preview-1 patron-bold--bold-white-40px">{preview}</div>
            <div className="a-preview-of-nixnet">{aPreviewOfNixnet}</div>
            <div className="rectangle-6-1"></div>
            <div className="nixnettv-preview patron-bold--bold-white-40px">{nixnetTvPreview1}</div>
            <div className="nixnettv-preview-1 patron-bold--bold-white-40px">{nixnetTvPreview2}</div>
            <div className="available-from-314 patron-bold--bold-white-40px">{availableFrom314}</div>
          </div>
          <div className="season-container patron-bold--bold-white-40px">
            <div className="season-1">{season11}</div>
            <div className="season-1">{season12}</div>
          </div>
          <div className="rectangle-8"></div>
          <div className="overlap-group1-1">
            <Link to="/web-1920-4">
              <div className="rectangle-9"></div>
            </Link>
            <div className="place-1 patron-bold--bold-white-40px">{place}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Web19205;
