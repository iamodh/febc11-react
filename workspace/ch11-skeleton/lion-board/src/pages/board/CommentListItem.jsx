import useAxiosInstance from "@hooks/useAxiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

CommentListItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
    }).isRequired,
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default function CommentListItem({ item }) {
  const axios = useAxiosInstance();
  const queryClient = useQueryClient();
  const { _id } = useParams();

  const removeComment = useMutation({
    mutationFn: (_id) => axios.delete(`/posts/${_id}/replies/${item._id}`),
    onSuccess: () => {
      alert("댓글이 삭제되었습니다.");
      queryClient.invalidateQueries({ queryKey: ["posts", _id] });
    },
  });

  const onSubmit = (event) => {
    event.preventDefault();
    removeComment.mutate(_id);
  };

  return (
    <div className="shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        {item.user.image && (
          <img
            className="w-8 mr-2 rounded-full"
            src={`https://11.fesp.shop/${item.user.image.path}`}
            alt={`${item.user.name} 프로필 이미지`}
          />
        )}
        <Link to="" className="text-orange-400">
          {item.user.name}
        </Link>
        <time className="ml-auto text-gray-500" dateTime={`${item.createdAt}`}>
          {item.createdAt}
        </time>
      </div>
      <div className="flex justify-between items-center mb-2">
        <form onSubmit={onSubmit}>
          <pre className="whitespace-pre-wrap text-sm">{item.content}</pre>
          <button
            type="submit"
            className="bg-red-500 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded"
          >
            삭제
          </button>
        </form>
      </div>
    </div>
  );
}
