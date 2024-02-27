
const userFormValidation=(data)=>{
    debugger
    let error={};

    if(!data.name){
      error.name='Please Enter the Name'
    }else{
        if(data.name.length <5){
            error.name='Please Enter min 5 Chars';
        }
    }
    if(!data.rollno){
        error.rollno='Please Enter the Mob No'
      }else{
        debugger
        if(data.rollno.length <10 || data.rollno.length >10){
            error.rollno='Please Enter min 10 digit No';
        }
      }
      if(!data.address){
        error.address='Please Enter the Address'
      }

return error;
}

export default userFormValidation