
import {initNAME} from './utils/initDATA'

const currDATA={};
const nameReeducer=(currDATA=initNAME,newDATA)=>{
       debugger
         if(newDATA.type=='NAME'){
       currDATA={
        ...currDATA,
        name :newDATA.name
       }
}
       return currDATA
}

export default nameReeducer;