

import {initActionDATA} from './utils/initDATA';


let currDATA = {};
const actionReducers=(currDATA=initActionDATA,newDATA)=>{
 // debugger
  switch(newDATA.type){
      case 'USERS':
        currDATA={
            ...currDATA,
            users:newDATA.payload
        }
        break;
        case 'PHOTOS':
        currDATA={
            ...currDATA,
            photos:newDATA.payload
        }
        break;
        case 'COMMENTS':
        currDATA={
            ...currDATA,
            comments:newDATA.payload
        }
        break;
  }
  return currDATA

  }


export default actionReducers;