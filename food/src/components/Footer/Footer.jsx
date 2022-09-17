import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="logo footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Tasty Treaty</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quaerat saepe eum velit sed minus facere illo{" "}
              </p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span> Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
            </ListGroup>

            <ListGroup>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <p>Location: xyz Bazar,St no 55</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Phone: 017454585</span>
              </ListGroupItem>
            </ListGroup>

            <ListGroup>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Email:example@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-send"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                </svg>
              </span>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col lg="6" md="6">
            <p className="copyright__text">Copyright - 2022, Made with❤️by DEEPAK</p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center justify-content-end gap-4">
              <p className="m-0">Follow:</p>
              <span>
                <Link to="https://deepak.com" className="text-decoration-none">
                <i className="ri-instagram-line"></i>
                </Link> {" "}
              </span>
              <span>
                <Link to="https://github.com" className="text-decoration-none">
                <i className="ri-github-fill"></i>
                </Link>
              </span>
              <span><Link to='https://sajjaj' className="text-decoration-none"><i className="ri-facebook-circle-fill"></i></Link></span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
