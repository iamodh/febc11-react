import Todo from "./pages/Todo";
import Header from "@components/Header";
import Footer from "@components/Footer";
import TodoContainer from "@pages/TodoContainer";

function App() {
  return (
    <div id="todo">
      <Header />
      {/* 비즈니스 로직 (상태)을 포함한 컨테이너 컴포넌트 */}
      {/* 상태가 변경되었을 때 불필요한 리렌더링을 줄일 수 있다. */}
      <TodoContainer />;
      <Footer />
    </div>
  );
}

export default App;
