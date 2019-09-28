import React from "react";
import "./foot.css";

function Foot(props) {
  return (
    <div className="foot">
      <div>
        <button className="clear-button" onClick={props.handlePrevious}>{`< Previous`}</button>
      </div>
      <div>
        <button className="blue-button">{`Edit`}</button>
        <button className="blue-button">{`Delete`}</button>
        <button className="blue-button">{`New`}</button>
      </div>
      <div>
        <button className="clear-button" onClick={props.handleNext}>{`Next >`}</button>
      </div>
    </div>
  );
}
export default Foot;
