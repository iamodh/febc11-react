function TodoItem({ item, toggleDone, deleteItem }) {
  return (
    <li>
      <span>{item._id}</span>
      <span onClick={() => toggleDone(item._id)}>
        {item.done ? <s>{item.title}</s> : item.title}
      </span>
      <button onClick={() => deleteItem(item._id)} type="button">
        삭제
      </button>
    </li>
  );
}

export default TodoItem;
