import apiRequest from "./apiRequest.service.js";

export const register = async (data) =>{
    try{
        const result = await apiRequest.post("/auth/register",data);
        return result
    }
    catch(err){
        console.log(err);
    }
}