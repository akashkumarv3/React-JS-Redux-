import ServerCall from "../shared/serverCall"
//import mystore from "../store/myRduxStore"

const photosAction=(dispatch)=>{
    ServerCall.fnSendGetReq('https://jsonplaceholder.typicode.com/photos')
    .then((res)=>{
     console.log(res.data)
     dispatch(
        {
            type:'PHOTOS',
            payload:res.data
        }
     )
    }

    ).catch((res)=>{
        console.log(res.data)
    }

    )

}


export default photosAction;