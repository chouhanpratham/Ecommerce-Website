import React from "react";
import Layout from "../components/Layout/Layout";

const PolicyPage = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/4440574.jpg"
            alt="Policy"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <div className="policy">
            <h1 className="bg-dark p-2 text-white text-center">Policy</h1>
            <h5>P GROUP PRIVACY POLICY</h5>
            <br></br>
            <p>
              When you use our services, you’re trusting us with your
              information. We understand this is a big responsibility and work
              hard to protect your information and put you in control.
            </p>
            <p>
              This Privacy Policy applies when you use our Services (described
              below). We offer our users choices about the data we collect, use
              and share as described in this Privacy Policy, Cookie Policy,
              Settings and our Help Center.{" "}
            </p>
            
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PolicyPage;
