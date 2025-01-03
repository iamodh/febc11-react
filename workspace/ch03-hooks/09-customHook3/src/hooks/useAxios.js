import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://todo-api.fesp.shop/api";
axios.defaults.timeout = 1500;

function useAxios(fetchParams) {
  // 서버로부터 받은 응답 data
  const [data, setData] = useState(null);
  // 에러 메세지
  const [error, setError] = useState(null);
  // 로딩중 상태
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    request(fetchParams);
  }, []);

  // API 서버에 fetch API로 ajax 요청을 보낸다.
  const request = async (params) => {
    try {
      setIsLoading(true);
      const res = await axios(params.url);
      console.log(res);

      setData(res.data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError({
        message:
          "일시적인 문제로 인해 작업 처리에 실패했습니다. 잠시 후 다시 요청해 주시기 바랍니다.",
      });
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, isLoading };
}

export default useAxios;
