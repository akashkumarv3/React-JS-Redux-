import "./TableComp.css";
import React from "react";

function template() {
  const {headers,keys,data,fnDelete,fnEdit}=this.props
  return (
    <div className="table-comp">
      <h1>Users</h1>
      <div className="table-responsive">
  <table   className="table table-bordered">
    <thead>
    <tr>
      {
        headers.map((v,i)=>{
            return <th key={i}>{v}</th>
})
      }
     <th>Edit</th>
     <th>Delete</th>

    </tr>
     </thead>
    
               <tbody>
                {
                   data.map((obj,index)=>{
                              return <tr key={index}>
                                {
                                  keys.map((k,i)=>{
                                  return <td key={i}>{obj[k]}</td>
                                  })
                                }
                                   <td><button onClick={()=>fnEdit(obj)} className="btn btn-primary">Edit</button></td>
                                   <td><button  onClick={()=>fnDelete(obj)} className="btn btn-primary">Delete</button></td>
                              </tr>
                   })
                }

                </tbody>
  </table>
      </div>
    </div>
  );
};

export default template;
