import Todo from "@pages/Todo";
import { useReducer, useRef, useState } from "react";
import TodoReducer from "@pages/TodoReducer";

function TodoContainer() {
  // 샘플 목록
  const sampleItemList = [
    { _id: 1, title: "두부", done: true },
    { _id: 2, title: "계란", done: false },
    { _id: 3, title: "라면", done: true },
  ];
  const [itemList, itemListDispatch] = useReducer(TodoReducer, sampleItemList);
  const nextId = useRef(sampleItemList.length + 1);

  const addItem = (title) => {
    itemListDispatch({
      type: "ADD",
      value: { _id: nextId.current, title, done: false },
    });
    // setNextId(nextId + 1);
    nextId.current += 1;
  };

  const toggleDone = (_id) => {
    itemListDispatch({ type: "TOGGLE", value: { _id } });
  };

  const deleteItem = (_id) => {
    itemListDispatch({ type: "DELETE", value: { _id } });
  };

  return (
    <Todo
      itemList={itemList}
      addItem={addItem}
      toggleDone={toggleDone}
      deleteItem={deleteItem}
    />
  );
}

export default TodoContainer;
