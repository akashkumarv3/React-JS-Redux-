import React    from "react";
import template from "./B.jsx";
import mystore from "../../store/myRduxStore.js";

class B extends React.Component {
  constructor(){
    super();
    this.myref=React.createRef();
  }
    fnclik(){
    let loc=this.myref.current.value;
    mystore.dispatch({
      type:'LOC',
      loc:loc
    })
  }
  render() {
    return template.call(this);
  }
}

export default B;
