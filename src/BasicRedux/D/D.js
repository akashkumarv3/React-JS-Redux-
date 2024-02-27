import React    from "react";
import template from "./D.jsx";
import { connect } from "react-redux";

class D extends React.Component {
  render() {
    return template.call(this);
  }
}
D=connect((state)=>{
  return {
     n:state.nameReeducer.name,
     l:state.locReducer.loc
      }
}
)(D)
export default D;
