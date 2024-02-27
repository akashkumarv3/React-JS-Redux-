import "./ReduxAction.css";
import React from "react";

function template() {
  return (
    <div className="redux-action">
      <h1>ReduxAction</h1>
      <div>
        <button onClick={this.fnUsers.bind(this)}>Users</button>
        <button onClick={this.fnPhotos.bind(this)}>Photos</button>
      </div>
    </div>
  );
};

export default template;
