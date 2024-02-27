
import React from "react"

const textArea=({name,input,lbl,meta: { touched, error }})=>{

return <label className="row form-label">
        <div className="col-sm-5 text-end"> <b>{lbl}:</b> </div>
        <div className="col-sm-3"><textarea {...input} name={name} className="form-control"/></div>
        <div className="col-sm-4 text-start">
            {touched && error && <b className="text-danger">{error}</b>}
            </div>  
      </label>

//return <div><b>{lbl}:</b><textarea {...input} name={name}/></div>
}

export default textArea