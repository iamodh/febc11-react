import { useState } from "react";
import Header from "./components/Header";
import Todo from "./pages/Todo";
import Footer from "./components/Footer";

function App() {
  // 샘플 목록
  const [itemList, setItemList] = useState([
    { _id: 1, title: "두부", done: true },
    { _id: 2, title: "계란", done: false },
    { _id: 3, title: "라면", done: true },
  ]);

  const addItem = (item) => {
    setItemList([...itemList, item]);
  };

  const toggleDone = (_id) => {
    const item = itemList.find((item) => item._id === _id);
    item.done = !item.done;
    setItemList([...itemList]);
  };

  const deleteItem = (_id) => {
    const newItemList = itemList.filter((item) => item._id !== _id);
    setItemList(newItemList);
  };

  return (
    <div id="todo">
      <Header />
      <Todo
        itemList={itemList}
        addItem={addItem}
        toggleDone={toggleDone}
        deleteItem={deleteItem}
      />
      <Footer />
    </div>
  );
}

export default App;
