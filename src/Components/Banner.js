import React from "react";
import styled from "styled-components";
// import { CiFacebook, CiAvocado } from "react-icons/ci";
const Virat = styled.h1`
  color: blue;
`;

function Banner(props) {
  return (
    <>
      <div>
        <Virat>HEY THIS IS BANNER COMPONENT {props.kohli}</Virat>
      </div>

      {/* <div className="container">
        <CiFacebook size={55} color="red" />
        <CiAvocado className="text-danger fa-10x border border-danger rounded-circle bg-dark" />
      </div>

      <i class="fa-solid fa-download fa-10x text-success border border-primary rounded-pill p-lg-2"></i>

      <div className="container">
        <button className="btn btn-danger">CLICK HERE</button>
      </div> */}
    </>
  );
}

export default Banner;
