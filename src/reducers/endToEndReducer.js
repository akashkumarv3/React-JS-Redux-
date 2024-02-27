

import {endToEndData} from './utils/initDATA';


let currDATA = {};
const endToEndReducer=(currDATA=endToEndData,newDATA)=>{
  //debugger
  switch(newDATA.type){
      case 'STUDENTS':
        currDATA={
            ...currDATA,
            students:newDATA.payload
        }
        break;
        case 'STUDENT_INFO':
        currDATA={
            ...currDATA,
            studentObj:newDATA.payload,
            isEdit:true
        }
        break;
        case 'STUDENT_CANCEL':
          currDATA={
              ...currDATA,
              studentObj:newDATA.payload,
              isEdit:false
          }
          break;
  }
  return currDATA

  }


export default endToEndReducer;