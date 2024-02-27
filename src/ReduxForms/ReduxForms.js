import React    from "react";
import template from "./ReduxForms.jsx";
import {reduxForm} from 'redux-form';
import {reset} from 'redux-form'
import userFormValidation from "../validation/userFormValidation.js";
import ServerCall from "../shared/serverCall.js";
import studentAction from "../actions/studentAction.js";
import { connect } from "react-redux";
import stdAction from "../actions/studentAction.js";

class ReduxForms extends React.Component {
  constructor(){
    super();
    this.headers=['NAME','MOB','ADDRESS'];
    this.keys=['name','rollno','address'];
    //here this fn will bind for define
    this.fnRegister=this.fnRegister.bind(this)
    this.fnEdit=this.fnEdit.bind(this)
    this.fnDelete=this.fnDelete.bind(this)
  }

  componentDidMount(){
//debugger
stdAction();
  }

  async fnDelete(rowData){
    debugger
    const isOk=window.confirm('Are you sure to delete this User')
    const id=rowData._id
    if(isOk){
      const res= await  ServerCall.fnSendGetReq('delete?id='+id,true);
      // debugger
       console.log('User is deleted now')
       let result=res.data;
       if(typeof(result)=='string'){
   alert(result)
       }else{
         if(result.acknowledged==true && result.deletedCount>0){
   alert("User Deatils Deleted Successfully")
   //after succes of insertion we want to fetch the details from mongo db then later will dispatch reducer through dispath method
   stdAction();
         }
        }
    }
  }
fnEdit(rowData){
 // debugger
  this.props.dispatch({
    type:'STUDENT_INFO',
    payload:rowData
  })
  
}
fnCancel(){
  this.props.dispatch({
    type:'STUDENT_CANCEL'
  })
}  

 async fnRegister(data){
    debugger
    if(this.props.isEdit){
      //for update the specific user details
      let datObj={data}
      let id=data._id;
      delete data._id;
    const res= await  ServerCall.fnPostGetReq('update?id='+id,datObj,true);
   // debugger
    console.log('resposne submitted in db')
    let result=res.data;
    if(typeof(result)=='string'){
alert(result)
    }else{
      if(result.acknowledged==true){
alert("User Deatils updated Successfully")
//after succes of insertion we want to fetch the details from mongo db then later will dispatch reducer through dispath method
stdAction();
this.fnCancel();

      }else{
        alert('fail')
      }
    }
debugger
    }else{
    let datObj={data}
    const res= await  ServerCall.fnPostGetReq('insert',datObj,true);
   // debugger
    console.log('resposne submitted in db')
    let result=res.data;
    if(typeof(result)=='string'){
alert(result)
    }else{
      if(result.acknowledged==true){
alert("Success")
debugger
//after succes of insertion we want to fetch the details from mongo db then later will dispatch reducer through dispath method
stdAction();
//here after submitting details then wehave to reset redux from pase so we can use dispatch(reset(reduxForm))
//but we this funtion we will pass from connect bcz its take other aruments as funtion so will take from there
this.props.dispatch(reset('usersForm'))

      }else{
        alert('fail')
      }
    }
  }
  }
  render() {
    return template.call(this);
  }
}

ReduxForms=reduxForm({
  form:'usersForm',  //it is mandatory filed name you can give anything for form:'anyname'
  validate:userFormValidation,
  enableReinitialize:true
})(ReduxForms)


//for reset fomr we r using this function
//const f2=(dispatch)=>{
//   return dispatch
//}
const mapthisStateToProps=(state)=>{
 // debugger
     return {
      students:state.eter.students,
      initialValues:state.eter.studentObj , //this initialValue its predefine of redux library we can use diretly and for this we have to enble in form
      isEdit:state.eter.isEdit
}
}
ReduxForms=connect(mapthisStateToProps)(ReduxForms)

export default ReduxForms;
