import { useSuspenseQuery } from "@tanstack/react-query";
import FetchOnRender from "./03-FetchAsYouRender";
import axios from "axios";

// 게시글 목록 조회 API 호출
function fetchPostList() {
  return axios.get("https://11.fesp.shop/posts?type=brunch", {
    headers: { "client-id": "00-brunch" },
  });
}

// 게

function PostList() {
  const { data } = useSuspenseQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPostList(),
    select: (res) => res.data,
    staleTime: 1000 * 10,
  });

  if (!data) {
    return <div>게시물 목록 로딩중...</div>;
  }

  return (
    <>
      <h2>게시물 {data.item.length} 건이 있습니다.</h2>
    </>
  );
}

export default PostList;
