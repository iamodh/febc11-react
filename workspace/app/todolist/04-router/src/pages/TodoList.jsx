import TodoListItem from "@pages/TodoListItem";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const dummyData = {
  items: [
    {
      _id: 1,
      title: "잠자기",
    },
    {
      _id: 2,
      title: "자바스크립트 복습",
      done: true,
    },
  ],
};

function TodoList() {
  const [data, setData] = useState();

  useEffect(() => {
    setData(dummyData);
  }, []); // 마운트된 후에 한번만 호출

  const handleDelete = (_id) => {
    try {
      // API 서버에 수정 요청
      alert("할일이 삭제되었습니다.");
    } catch (err) {
      console.log(err);
      alert("할일 삭제에 실패하였습니다.");
    }
  };

  const itemList = data?.items.map((item) => (
    <TodoListItem key={item._id} item={item} handleDelete={handleDelete} />
  ));

  return (
    <div id="main">
      <h2>할일 목록</h2>
      <div className="todo">
        <Link to="/list/add">추가</Link>
        <br />
        <form className="search">
          <input type="text" autoFocus />
          <button type="submit">검색</button>
        </form>
        <ul className="todolist">{itemList}</ul>
      </div>

      <Outlet />
    </div>
  );
}

export default TodoList;
