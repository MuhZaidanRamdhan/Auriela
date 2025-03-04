import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Gallery1 from "../assets/gallery/el-1.jpg";
import Gallery2 from "../assets/gallery/el-2.jpg";
import Gallery3 from "../assets/gallery/el-3.jpg";
import Gallery4 from "../assets/gallery/el-4.jpg";
import Gallery5 from "../assets/gallery/el-5.jpg";
import Gallery6 from "../assets/gallery/el-6.jpg";
import Gallery7 from "../assets/gallery/el-7.jpg";
import Gallery8 from "../assets/gallery/el-8.jpg";
import Gallery9 from "../assets/gallery/el-9.png";
import Gallery10 from "../assets/gallery/el-10.jpg";

function GalleryComp() {
  return (
    <div style={{ marginBottom: "100px", paddingTop: '100px'}} id="gallery">
      <div className="title-gallery text-black text-center mb-5">
        <h1 className="fw-bold">My Gallery📸</h1>
        <p className="text-black-50">
          Ah I don't have a lot of photo. Maybe you can give me personally
        </p>
      </div>
      <div className="pinterest-grid">
        <img
          src={Gallery1}
          alt="unsplash.com"
          data-aos="fade-up"
          data-aos-delay="200"
          style={{ height: "400px", width: "100%", objectFit: "cover"}}
        />
        <img
          src={Gallery6}
          alt="unsplash.com"
          data-aos="fade-up"
          data-aos-delay="200"
          style={{ height: "350px", width: "100%", objectFit: "cover" }}
        />
          <img
            src={Gallery2}
            alt="unsplash.com"
            data-aos="fade-up"
            data-aos-delay="200"
            style={{ height: "440px", width: "100%", objectFit: "cover" }}
          />
        <img
          src={Gallery7}
          alt="unsplash.com"
          style={{ height: "480px", width: "100%", objectFit: "cover" }}
          data-aos="fade-up"
          data-aos-delay="200"
        />
        <img
          src={Gallery9}
          alt="unsplash.com"
          data-aos="fade-up"
          data-aos-delay="200"
          style={{ height: "500px", width: "100%", objectFit: "cover" }}
        />
        <img
          src={Gallery3}
          alt="unsplash.com"
          data-aos="fade-up"
          data-aos-delay="200"
          style={{ height: "500px", width: "100%", objectFit: "cover" }}
        />
        <img
          src={Gallery8}
          alt="unsplash.com"
          data-aos="fade-up"
          data-aos-delay="200"
          style={{ height: "410px", width: "100%", objectFit: "cover" }}
        />
        <img
          src={Gallery4}
          alt="unsplash.com"
          data-aos="fade-up"
          data-aos-delay="200"
          style={{ height: "390px", width: "100%", objectFit: "cover" }}
        />
        <img
         src={Gallery10}
          alt="unsplash.com"
          data-aos="fade-up"
          data-aos-delay="200"
          style={{ height: "430px", width: "100%", objectFit: "cover" }}
        />
        <img
          src={Gallery5}
          alt="unsplash.com"
          data-aos="fade-up"
          data-aos-delay="200"
          style={{ height: "500px", width: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

export default GalleryComp;
