import { Link, useNavigate, useOutletContext } from "react-router-dom";

function TodoEdit() {
  const { item } = useOutletContext();
  const navigate = useNavigate();

  const onSubmit = (event) => {
    try {
      event.preventDefault();
      // API 서버에 수정 요청

      navigate("..", { relative: true }); // 상대경로로 이동
      navigate(`/list/${item._id}`, { replace: true }); // window.history.replaceState()
      navigate(-1); // window.history.go(-1)
    } catch (err) {
      console.log(err);
      alert("할일 수정에 실패하였습니다.");
    }

    alert("할일이 수정되었습니다.");
  };
  return (
    <>
      <h2>할일 수정</h2>
      <div className="todo">
        <form onSubmit={onSubmit}>
          <label htmlFor="title">제목 :</label>
          <input type="text" id="title" defaultValue={item.title} autoFocus />
          <br />
          <label htmlFor="content">내용 :</label>
          <textarea
            id="content"
            cols="23"
            rows="5"
            defaultValue={item.content}
          />
          <br />
          <label htmlFor="done">완료 :</label>
          <input type="checkbox" id="done" defaultChecked />
          <br />
          <button type="submit">수정</button>
          <Link to="/list/1">취소</Link>
        </form>
      </div>
    </>
  );
}

export default TodoEdit;
