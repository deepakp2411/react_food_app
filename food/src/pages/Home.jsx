import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import { Link } from "react-router-dom";
import "../styles/hero-section.css";
import Category from "../components/UI/category/Category";
import "../styles/home.css";
import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from '../assets/fake-data/products'

import foodCategory01 from '../assets/images/hamburger.png'
import foodCategory02 from '../assets/images/pizza.png'
import foodCategory03 from '../assets/images/bread.png'

const featureData = [
  {
    title: "Quick Deleivery",
    imgUrl: featureImg01,
    desc: "lorem ipsum dolor,sit maet consecuter, adipissing elit",
  },
  {
    title: "Super Dine",
    imgUrl: featureImg02,
    desc: "lorem ipsum dolor,sit maet consecuter, adipissing elit",
  },
  {
    title: "Easy to pick",
    imgUrl: featureImg03,
    desc: "lorem ipsum dolor,sit maet consecuter, adipissing elit",
  },
];
const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Just wait <br /> food at
                  <span> your door</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum praesentium fugiat alias illo consequatur esse.
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now <i className="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/foods" className="text-decoration-none">
                      See all Foods
                    </Link>
                  </button>
                </div>

                <div className="hero__service d-flex align-items-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                dignissimos
              </p>
              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur, aliquam!{" "}
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="4" sm="4" key={index} classNamemt-5>
                <div className="feature__item text-center px-4 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>

            <Col lg='12'>
              <div className="food__category">
                <button className="all__btn">All</button>
                <button><img src={foodCategory01} alt="food-category" />Burger</button>
                <button><img src={foodCategory02} alt="food-category" />Pizza</button>
                <button><img src={foodCategory03} alt="food-category" />Bread</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
