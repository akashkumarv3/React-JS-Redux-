import axios from "axios";

const baseUrl='https://jsonplaceholder.typicode.com/'
const nodeMongoUrl='http://localhost:3001/'

class ServerCall{

static fnSendGetReq(url,isNodeMongo){
    debugger
    let _url=isNodeMongo?nodeMongoUrl:baseUrl
    return axios.get(_url+url);
}

static fnPostGetReq(url,data,isNodeMongo){
    let _url=isNodeMongo?nodeMongoUrl:baseUrl
return axios.post(_url+url,data);
}

}
export default ServerCall;