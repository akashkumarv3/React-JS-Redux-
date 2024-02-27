import ServerCall from '../shared/serverCall'
//import mystore from '../store/myRduxStore'

const usersActoin=(dispatch)=>{
    ServerCall.fnSendGetReq('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
     console.log(res.data)
     dispatch(
        {
            type:'USERS',
            payload:res.data
        }
     )
    }

    ).catch((res)=>{
        console.log(res.data)
    }

    )

}

export default usersActoin;