import React   from "react";

const textBox=({type,name,input,lbl,isEdit,meta: { touched, error }})=>{
   return <label className="row form-label">
          <div className="col-sm-5 text-end"><b>{lbl}:</b></div>
          <div className="col-sm-3"><input {...input} disabled={isEdit} type={type}  name={name} className="form-control" /></div>
          <div className="col-sm-4 text-start">
          {touched && error && <b className="text-danger">{error}</b>}
            </div>  
          </label>
   
   // return(<div><b>{lbl}:</b><input {...input} type={type} name={name} /></div>)
}

export default textBox;