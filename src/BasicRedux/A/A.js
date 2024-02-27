import React    from "react";
import template from "./A.jsx";
import mystore from '../../store/myRduxStore'
class A extends React.Component {
  constructor(){
    super();
    this.myref=React.createRef();
  }
    fnclik(){
      debugger
    let name=this.myref.current.value;
    mystore.dispatch({
      type:'NAME',
      name:name
    })
  }
  render() {
    return template.call(this);
  }
}

export default A;
