import React from "react";
import { useParams } from "react-router-dom";

function PageNotFound() {
  let kohli = useParams();
  console.log(kohli);

  //   let url = kohli.name;
  //   console.log(url);
  return (
    <>
      <style>
        {`
        
        span
        {
            color:green;
            text-decoration:underline;
            text-transform:uppercase;
        }
        
        `}
      </style>
      <div className="container">
        <h1 className="display-1 text-danger">
          OOPS! <span>{kohli.name} </span>PAGE NOT FOUND
        </h1>
      </div>
    </>
  );
}

export default PageNotFound;
