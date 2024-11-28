import axios from "axios";

function useAxiosInstance() {
  const instance = axios.create({
    baseURL: "https://todo-api.fesp.shop/api",
    timeout: 1500,
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  });

  return instance;
}

export default useAxiosInstance;
