// 초기 상태

import { COUNTER_ACTION } from "@redux/counterActionCreator";

const initialState = { count: 0 };

// 현재 상태와 action 객체를 받아서 새로운 상태를 반환하는 순수 함수
// state: 이전 상태 (store가 내부적으로 관리, 이전의 return 값이 다음에 state로 전달 됨)
// action: 동작을 정의한 객체(자유롭게 작성). 예시, {type: 'countUp', payload: {step: 2}}
// 리턴 값: 새로운 상태
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case COUNTER_ACTION.UP:
      // state.count += action.payload.step;
      // return state;
      return { ...state, count: state.count + action.payload.step };
    case COUNTER_ACTION.DOWN:
      return { ...state, count: state.count - action.payload.step };
    case COUNTER_ACTION.RESET:
      return { ...state, count: 0 };
  }
}

export default counterReducer;
