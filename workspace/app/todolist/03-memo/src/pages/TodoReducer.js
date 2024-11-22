import { produce } from "immer";

// state와 action을 전달받아 새로운 state를 반환하는 순수 함수
function TodoReducer(state, action) {
  let newState;
  const targetIndex = state.findIndex((item) => item._id === action.value._id);
  switch (action.type) {
    case "ADD":
      newState = produce(state, (draft) => {
        draft.push(action.value);
      });
      break;
    case "TOGGLE":
      newState = produce(state, (draft) => {
        draft[targetIndex].done = !draft[targetIndex].done;
      });
      break;
    case "DELETE":
      newState = produce(state, (draft) => {
        draft.splice(targetIndex, 1);
      });
      break;
    default:
      newState = state;
  }
  return newState;
}

export default TodoReducer;
