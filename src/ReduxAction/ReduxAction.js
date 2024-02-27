import React    from "react";
import template from "./ReduxAction.jsx";
import usersActoin from "../actions/usersAction.js";
import photosAction from "../actions/photosAction.js";
import { connect } from "react-redux";

class ReduxAction extends React.Component {
  fnUsers(){
     usersActoin(this.props.dispatch);
  }
  fnPhotos(){
   photosAction(this.props.dispatch);
  }
  render() {
    return template.call(this);
  }
}
ReduxAction=connect(null,(dispatch)=>{
   return {
    dispatch
   }
}
)(ReduxAction)

export default ReduxAction;
