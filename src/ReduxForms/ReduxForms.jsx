import "./ReduxForms.css";
import React from "react";
import { Field } from "redux-form";
import textArea from '../ReduxFormInputControls/textArea'
import textBox from '../ReduxFormInputControls/textBox'
import TableComp from "../resusableComponent/TableComp/TableComp";

function template() {
  return (
    <div className="redux-forms container-fluid">
      <h1>Users Form</h1>
      <form onSubmit={this.props.handleSubmit(this.fnRegister)}>
      <div>
        <Field name="name" lbl="Name" type="text" component={textBox}/>
        </div>
        <div>
        <Field name="rollno" lbl="Mob No" isEdit={this.props.isEdit} type="number" maxLength={10} component={textBox}/>
        </div>
        <div>
        <Field lbl="Address" name="address" type="text" component={textArea}/>
      </div>
      <div className="row form-group">
        <div className="offset-sm-5 col-sm-7 text-start">
        {
          this.props.isEdit  ?
          <>
          <input disabled={this.props.invalid} type="submit" value="Update" className="btn btn-primary"/>
          <input type="button" onClick={this.fnCancel.bind(this)} value="Cancel" className="btn btn-primary"/>
          </>
          :
          <>
          <input disabled={this.props.invalid} type="submit" value="Register" className="btn btn-primary"/>
          </>
        
          }
        </div>
      </div>
      </form>
     <TableComp 
     headers={this.headers} 
     keys={this.keys}
     data={this.props.students}
     fnEdit={this.fnEdit}
     fnDelete={this.fnDelete}
      />
    </div>
  );
};

export default template;
