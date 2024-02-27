import "./ReduxSaga.css";
import React from "react";

function template() {
  return (
    <div className="redux-saga">
      <h1>ReduxSaga</h1>
      <button onClick={this.fnGetComments.bind(this)}>Comments</button>
      <button onClick={this.fnGetAlbums.bind(this)}>Albums</button>
    </div>
  );
};

export default template;
