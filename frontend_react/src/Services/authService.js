import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/auth";


export const signup = async (useData) =>{
    return axios.post(`${API_BASE_URL}/signup` , useData);

}




export const login = async ({ email, password }) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, { email, password });

        // Agar token exist karta hai to return karo
        if (response?.data?.token) {
            return response.data;
        } else {
            throw new Error("Login failed: Token not received from server");
        }
    } catch (error) {
        // Safe error handling
        const message = error.response?.data?.error || error.message;
        throw new Error(message);
    }
};


//  isAuthenticated: ()=>{
//     const user = localStorage.getItem('user') || localStorage.getItem('currentUser');
//     return !!user;
//   }

  export const isAuthenticated =()=>{
    const user  = localStorage.getItem('token') || localStorage.getItem('username');
      return !!user;

  }

  




