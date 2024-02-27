

import {initLOC} from './utils/initDATA';


let currDATA = {};
const locReducer=(currDATA=initLOC,newDATA)=>{
    if(newDATA.type=='LOC'){
        currDATA={
        ...currDATA,
        loc: newDATA.loc
    }
}
    return currDATA;
}

export default locReducer;