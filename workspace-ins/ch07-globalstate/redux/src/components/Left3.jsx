import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Left3() {
  useEffect(()=>{
    console.log('      # Left3 렌더링.');
  });

  // useSelector() 훅으로 스토어 접근(자동으로 구독이 됨)
  // const state = useSelector(state => state);
  const count = useSelector(state => state.count);
  const date = useSelector(state => state.date);

  return (
    <div>
      <h3>Left3 - { date }</h3>
      <span>{ count }</span>
    </div>
  );
}

export default Left3;