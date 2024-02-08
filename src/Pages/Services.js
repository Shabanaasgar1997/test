import React from "react";
import { Fade } from "react-reveal";

function Services(props) {
  const Change = () => {
    alert("HEY U GOT THE JOB");
  };

  return (
    <div>
      <h1>HEY THIS IS SERVICES PAGE</h1>
      <button className="btn btn-success" onClick={props.yeshwanth}>
        CLICK
      </button>
      <h1 className="display-1">{props.number}</h1>
      <h1 className="display-1">{props.name}</h1>
      {props.anil === true ? (
        <h1>yeshwanth party for car</h1>
      ) : (
        <h1>yeshwanth party for job</h1>
      )}

      <button className="btn btn-warning" onMouseOver={Change}>
        HEY
      </button>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,
        maiores? Expedita, sapiente. Aut aliquam minus illum odit temporibus
        saepe architecto quod et expedita, quam, eos possimus necessitatibus
        excepturi nostrum? Corporis nostrum illum id vel quis accusantium
        recusandae alias odio, blanditiis ea. Deleniti vel harum earum quod
        eaque maxime id consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,
        maiores? Expedita, sapiente. Aut aliquam minus illum odit temporibus
        saepe architecto quod et expedita, quam, eos possimus necessitatibus
        excepturi nostrum? Corporis nostrum illum id vel quis accusantium
        recusandae alias odio, blanditiis ea. Deleniti vel harum earum quod
        eaque maxime id consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,
        maiores? Expedita, sapiente. Aut aliquam minus illum odit temporibus
        saepe architecto quod et expedita, quam, eos possimus necessitatibus
        excepturi nostrum? Corporis nostrum illum id vel quis accusantium
        recusandae alias odio, blanditiis ea. Deleniti vel harum earum quod
        eaque maxime id consectetur.
      </p>
      <Fade>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,
          maiores? Expedita, sapiente. Aut aliquam minus illum odit temporibus
          saepe architecto quod et expedita, quam, eos possimus necessitatibus
          excepturi nostrum? Corporis nostrum illum id vel quis accusantium
          recusandae alias odio, blanditiis ea. Deleniti vel harum earum quod
          eaque maxime id consectetur.
        </p>
      </Fade>
    </div>
  );
}

export default Services;
