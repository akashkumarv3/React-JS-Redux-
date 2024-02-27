import "./D.css";
import React from "react";

function template() {
  return (
    <div className="d">
      <h1>D</h1>
      <h2>Name:{this.props.n}</h2>
      <h2>Loc :{this.props.l}</h2>
    </div>
  );
};

export default template;
