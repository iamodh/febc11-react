import useAxiosInstance from "@hooks/useAxiosInstance";
import TodoListItem from "@pages/TodoListItem";
import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import "../Pagination.css";
import Pagination from "@components/Pagination";
// const dummyData = {
//   items: [
//     {
//       _id: 1,
//       title: "잠자기",
//     },
//     {
//       _id: 2,
//       title: "자바스크립트 복습",
//       done: true,
//     },
//   ],
// };

function TodoList() {
  const [data, setData] = useState();
  const searchRef = useRef("");

  // 쿼리 스트링 정보를 읽거나 설정
  const [searchParams, setSearchParams] = useSearchParams();

  const params = {
    keyword: searchParams.get("keyword") || "",
    page: searchParams.get("page") || 1,
  };
  // useEffect(() => {
  //   setData(dummyData);
  // }, []); // 마운트된 후에 한번만 호출

  // API 서버에서 목록 조회
  // const { data } = useFetch({ url: "/todolist" });
  const axios = useAxiosInstance();

  // API 서버에서 상세 정보를 조회
  const fetchList = async (params = {}) => {
    const res = await axios.get(`/todolist`, { params });
    setData(res.data);
  };

  useEffect(() => {
    fetchList(params);
  }, [searchParams]);

  const handleDelete = async (_id) => {
    try {
      // API 서버에 수정 요청
      await axios.delete(`todolist/${_id}`);
      alert("할일이 삭제되었습니다.");
      fetchList();
    } catch (err) {
      console.log(err);
      alert("할일 삭제에 실패하였습니다.");
    }
  };

  const itemList = data?.items.map((item) => (
    <TodoListItem key={item._id} item={item} handleDelete={handleDelete} />
  ));

  const handleSearch = (e) => {
    e.preventDefault();
    const inputKeyword = searchRef.current.value;
    console.log(inputKeyword);
    const newSearchParams = new URLSearchParams(`keyword=${inputKeyword}`);
    console.log(newSearchParams);
    setSearchParams(newSearchParams);
  };

  return (
    <div id="main">
      <h2>할일 목록</h2>
      <div className="todo">
        <Link to="/list/add">추가</Link>
        <br />
        <form className="search" onSubmit={handleSearch}>
          <input
            type="text"
            autoFocus
            defaultValue={params.keyword}
            ref={searchRef}
          />
          <button type="submit">검색</button>
        </form>
        <ul className="todolist">{itemList}</ul>
      </div>
      {data && (
        <Pagination
          totalPages={data?.pagination.totalPages}
          current={data?.pagination.page}
        />
      )}
    </div>
  );
}

export default TodoList;
