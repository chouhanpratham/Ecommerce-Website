import React from "react";
import Layout from "../components/Layout/Layout";

const PolicyPage = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/policy.webp"
            alt="Policy"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <div className="policy">
            <h1 className="bg-dark p-2 text-white text-center">Policy</h1>
            <p>Policy 1</p>
            <p>Policy 2</p>
            <p>Policy 3 </p>
            <p>Policy 4</p>
            <p>Policy 5</p>
            <p>Policy 6</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PolicyPage;
