import React, { useEffect } from "react";
import "./categories.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import img from "../../../../images/hero.jpg";
import img2 from "../../../../images/cate.jpg";
import img3 from "../../../../images/cate2.jpg";
import img4 from "../../../../images/cate3.jpg";
import img5 from "../../../../images/cate4.jpg";

const categories = [
  {
    title: " انجلش",
    image: img,
  },
  {
    title: " احياء",
    image: img2,
  },
  {
    title: " تطبيقات",
    image: img3,
  },
  {
    title: " برمجة",
    image: img4,
  },
  {
    title: " تصميم",
    image: img3,
  },
  {
    title: " تطبيقات",
    image: img5,
  },
  {
    title: " برمجة",
    image: img4,
  },
  {
    title: " برمجة",
    image: img2,
  },
];
const Categories = () => {
  return (
    <div className="categories">
      <Container>
        <h2 className="text-center mb-4">التصنيفات</h2>
        <div className="row gap-3 d-flex justify-content-center align-items-center">
          {categories.map((category, index) => (
            <div
              className="category-card col-md-3 col-sm-6 col-lg-3 "
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) , url(${category.image})`,
              }}
            >
              <Link to={"/cources"}>{category.title}</Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Categories;
