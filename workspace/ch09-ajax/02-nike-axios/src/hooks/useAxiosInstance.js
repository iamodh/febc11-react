import axios from "axios";
import { toast } from "react-toastify";

function useAxiosInstance() {
  const instance = axios.create({
    baseURL: "https://11.fesp.shop/",
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      "client-id": "00-nike",
    },
  });

  // 요청 인터셉터 추가하기
  instance.interceptors.request.use((config) => {
    // 요청이 전달되기 전에 필요한 공통 작업 수행
    config.params = {
      delay: 2000,
      ...config.params,
    };
    return config;
  });

  // 응답 인터셉터 추가하기
  instance.interceptors.response.use(
    (response) => {
      // 2xx 범위에 있는 상태 코드는 이 함수가 호출됨
      // 응답 데이터를 이용해서 필요한 공통 작업 수행

      return response;
    },
    (error) => {
      const message = "잠시후 다시 요청하세요.";
      toast.error(message);

      return Promise.reject(error);
    }
  );

  return instance;
}

export default useAxiosInstance;
