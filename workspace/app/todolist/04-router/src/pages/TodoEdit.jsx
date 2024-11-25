import { useState } from "react";
import { Link } from "react-router-dom";

function TodoEdit() {
  const [todo, setTodo] = useState({
    title: "잠자기",
    content: "주말에 수업 끝나면 잠이나 실컷 자야지",
    done: false,
  });

  console.log(JSON.stringify(todo));

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setTodo({
      ...todo,
      [e.target.id]: value,
    });
  };
  return (
    <>
      <h2>할일 수정</h2>
      <div className="todo">
        <form>
          <label htmlFor="title">제목 :</label>
          <input
            type="text"
            id="title"
            value={todo.title}
            onChange={handleChange}
            autoFocus
          />
          <br />
          <label htmlFor="content">내용 :</label>
          <textarea
            id="content"
            cols="23"
            rows="5"
            defaultValue={todo.content}
            onChange={handleChange}
          ></textarea>
          <br />
          <label htmlFor="done">완료 :</label>
          <input
            type="checkbox"
            id="done"
            checked={todo.done}
            onChange={handleChange}
          />
          <br />
          <Link to="/list/1">수정</Link>
          <Link to="/list/1">취소</Link>
        </form>
      </div>
    </>
  );
}

export default TodoEdit;
