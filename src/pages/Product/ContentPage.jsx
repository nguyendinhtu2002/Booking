import React from "react";
import Frame1 from "../../assets/img/product_media/Frame1.png";
import "../../pages/Product/css/MediaPage.css";

const ContentPage = () => {
  return (
    <>
      <div className="content">
        <div className="content-left">
          <img src={Frame1} alt="media" className="img_media" />
        </div>
        <div className="divine"></div>
        <div className="content-right">
          <h3 className="content-right-title">OVERVIEW</h3>
          <span className="content-right-para">
            see yourselves in action - films, movies, documentaries, etc. with
            insightful relation
          </span>
        </div>
      </div>
    </>
  );
};

export default ContentPage;
