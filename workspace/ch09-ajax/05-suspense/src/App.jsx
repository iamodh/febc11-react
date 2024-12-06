import { Suspense } from "react";
import FetchAsYouRender, { Replies } from "./03-FetchAsYouRender";
import PostList from "./PostList";

function App() {
  return (
    <>
      <h1>05 - Fetch-as-you-render</h1>
      <h3>Fetch-as-you 방식</h3>
      <Suspense fallback={<div>게시물 목록 조회중...</div>}>
        <PostList />
        <Suspense fallback={<div>게시물 상세 조회중...</div>}>
          <FetchAsYouRender />

          <Suspense fallback={<div>댓글 조회중...</div>}>
            <Replies />
          </Suspense>
        </Suspense>
      </Suspense>
    </>
  );
}

export default App;
