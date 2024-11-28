import useAxios from "@hooks/useAxios";
import useAxiosInstance from "@hooks/useAxiosInstance";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

function TodoEdit() {
  const { item, refetch } = useOutletContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: item.title,
      content: item.content,
      done: item.done,
    },
  });

  // axios 인스턴스
  const axios = useAxiosInstance();
  const onSubmit = async (formData) => {
    try {
      // API 서버에 수정 요청
      await axios.patch(`/todolist/${item._id}`, formData);

      navigate(-1); // window.history.back(-1)
      refetch();
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="title">제목 :</label>
          <input
            type="text"
            id="title"
            autoFocus
            {...register("title", {
              required: "제목을 입력하세요.",
            })}
          />
          <div className="input-error">{errors.title?.message}</div>
          <br />
          <label htmlFor="content">내용 :</label>
          <textarea
            id="content"
            cols="23"
            rows="5"
            {...register("content", {
              required: "내용을 입력하세요.",
            })}
          />
          <div className="input-error">{errors.content?.message}</div>

          <br />
          <label htmlFor="done">완료 :</label>
          <input type="checkbox" id="done" {...register("done")} />
          <br />
          <button type="submit">수정</button>
          <Link to={`/list/${item._id}`}>취소</Link>
        </form>
      </div>
    </>
  );
}

export default TodoEdit;
