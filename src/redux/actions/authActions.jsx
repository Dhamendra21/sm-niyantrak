import axios from "../../api/axios";


export const loginUser = async (email, password) => {
    const response = await axios.post("/api/auth/login", { email, password });
    return response;
}

export const registerUser =  async(fullname, email, password) => {
    const response = await axios.post("/api/auth/register",{fullname, email, password});
    return response
}