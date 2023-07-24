import React from "react";
import Layout from "../components/Layout/Layout";

const AboutPage = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpg"
            alt="Aboutus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="text-center">About Us</h1>
          <p className="text-justify text-center ">
            P Group is a new E-commerce website.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
