import React    from "react";
import template from "./ReduxThunk.jsx";
import PostsAction from "../actions/PostsAction.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class ReduxThunk extends React.Component {

  fnGetPosts(){
    debugger
    this.props.PostsAction();
  }
  render() {
    return template.call(this);
  }
}

ReduxThunk=connect(
null,(dispatch)=>{
  return{
    PostsAction:bindActionCreators(PostsAction,dispatch)
  }
}


)(ReduxThunk)


export default ReduxThunk;
