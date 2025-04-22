import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // URL base da sua API
  headers: {
    "Content-Type": "application/json"
  }
});

// // Você pode adicionar interceptadores, se necessário
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     console.error("Axios error:", error);
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
