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

export const login = async (data) =>{
    try{
        const result = await apiRequest.post("/auth/login",data);
        return result;
    }
    catch(err){
        console.log(err);
    }
}

export const getMe = async (token) =>{
    if (!token) return null;

    return apiRequest.get("/auth/me", {
        Authorization: `Bearer ${token}`,
    });
}
