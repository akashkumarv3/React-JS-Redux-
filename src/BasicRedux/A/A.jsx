import "./A.css";
import React from "react";

function template() {
  return (
    <div className="a">
      <h1>A</h1>
      <p>
       Name: <input type="text" ref={this.myref} /> <button onClick={this.fnclik.bind(this)}> Store</button>
      </p>
    </div>
  );
};

export default template;
