import ServerCall from "../shared/serverCall";
import mystore from "../store/myRduxStore";

const stdAction=()=>{
    debugger
    ServerCall.fnSendGetReq('get',true)
    .then((res)=>{
        const data=res.data;
        //after getting result from db then we store in redux store so later we can use it directly
        mystore.dispatch(
            {
                type:'STUDENTS',
                payload:data
            }
        )
    }).catch((res)=>{

    })

}

export default stdAction;