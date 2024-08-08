import React, { memo } from "react";
import { Row, Col } from "react-bootstrap";
import "../header/header.scss";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../button/button";
import Footer from "../footer/footer";
import './recruiterLayout.scss'

const routes = [
  { path: "/", label: "Dashboard" },
  { path: "/job-post-form", label: "JobPostForm" },
  { path: "/job-list", label: "JobList" },
  { path: "/applicant-list", label: "ApplicantList" },
  { path: "/profile", label: "Profile" }
];

function RecruiterLayout({ children }) {
  const navigate = useNavigate();
  
  return (
    <>
      <Row className="header-row d-flex" md={12}>
        <Col className="d-flex">
          <Col md="auto">
            <p className="header-title-1">RRONS</p>
          </Col>
          <Col md="auto" className="ps-0">
            <p className="header-title-2">WORKFORCE</p>
          </Col>
          {routes.map(({ path, label }) => (
            <Col key={path} md="auto" className="align-center-col">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `header-subtitle ps-3 pe-4 ${isActive ? "active-link" : ""}`
                }
              >
                {label}
              </NavLink>
            </Col>
          ))}
        </Col>
        <Col className="d-flex justify-content-end pr-5">
          <Button
            className="login-button mr-5"
            text="Logout"
            onClick={() => navigate("/candidate-login/?mode=viewProfile")}
          />
        </Col>
      </Row>
      <div className="content-wrapper">{children}</div>
      <Footer />
    </>
  );
}

export default memo(RecruiterLayout);
