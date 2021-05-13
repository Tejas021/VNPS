import React from "react";
import Block from './Block'

const Complains = ({ complains, type }) => {
  let text;
  let color1;
  if (type === "fire") {
    color1 = "warning";
    text = "Your Fire Emergencies:";
  } else if (type === "medical") {
    color1 = "danger";
    text = "Your Medical Emergencies:";
  } else {
    color1 = "info";
    text = "Your Police Complains:";
  }

  return (
    <div className="my-5 container-fluid">
      <div className="row">
        <h3 style={{ textAlign: "left" }}>{text}</h3>
        {!complains
          ? "Loading"
          : complains.map((complain) => (
              // <div
              //   key={complain.id}
              //   className={` m-2 border border-${color1} col-md-3 col-sm-6 col-xs-12`}
              // >
              //   <h6 >Date:{complain.date}</h6>
              //   <h3 >{complain.title}</h3>
              //   {/* <button className="btn btn-success" onclick={e=>}>show</button> */}
              //   <h6>{complain.description}</h6>
              // </div>
              <Block complain={complain} color1={color1} />
            ))}
      </div>
    </div>
  );
};

export default Complains;
