import axios from "axios"

export const api = axios.create({
  baseURL:process.env.REACT_APP_BACKEND_URL,
  headers:{
    "Content-Type":"application/json",
  }
})

// api.interceptors.request.use(
//     (config)=>{
//         const token = localStorage.getItem('token')
//         console.log(token,"toeken")
//         if(token){
//             config.headers.Authorization = `Bearer ${token}`
//         }
//         return config
//     },
//     (error) => Promise.reject(error)
// )


api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      console.log(originalRequest)
  
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
  
        try {
          
          const response = await api.post('/user/refresh-token');
          const { token } = response.data;
  
          localStorage.setItem('token', token);
  
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return axios(originalRequest);
        } catch (error) {
         console.log(error)
        }
      }
  
      return Promise.reject(error);
    }
  );
  

export default api