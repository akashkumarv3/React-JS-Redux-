import "./B.css";
import React from "react";

function template() {
  return (
    <div className="b">
      <h1>B</h1>
      <p>
       Loc: <input type="text" ref={this.myref} /> <button onClick={this.fnclik.bind(this)}> Store</button>
      </p>
    </div>
  );
};

export default template;
