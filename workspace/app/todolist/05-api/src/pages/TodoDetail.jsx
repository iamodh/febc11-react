import useAxios from "@hooks/useAxios";
import useAxiosInstance from "@hooks/useAxiosInstance";
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

// const dummyData = {
//   item: {
//     _id: 5,
//     title: "Javascript 공부",
//     content: "열심히 하자",
//     done: false,
//     createdAt: "2024.11.21 16:49:00",
//     updatedAt: "2024.11.21 16:49:00",
//   },
// };

function TodoDetail() {
  const { _id } = useParams();
  const [data, setData] = useState();
  // useEffect(() => {
  //   setData(dummyData);
  // }, []);

  // const { data } = useAxios({ url: `/todolist/${_id}` });

  const axios = useAxiosInstance();
  // API 서버에서 상세 정보를 조회
  const fetchDetail = async () => {
    const res = await axios.get(`/todolist/${_id}`);
    setData(res.data);
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  const navigate = useNavigate();

  return (
    <div id="main">
      <h2>할일 상세 보기</h2>
      {data && (
        <>
          <div className="todo">
            <div>제목 : {data.item.title}</div>
            <div>내용 : {data.item.content}</div>
            <div>상태 : {data.item.done}</div>
            <div>작성일 : {data.item.createdAt}</div>
            <div>수정일 : {data.item.updatedAt}</div>
            <Link to="./edit">수정</Link>
            <button
              type="button"
              onClick={() => {
                navigate(-1);
              }}
            >
              목록
            </button>
          </div>
          <Outlet context={{ item: data.item, refetch: fetchDetail }} />
        </>
      )}
    </div>
  );
}

export default TodoDetail;
