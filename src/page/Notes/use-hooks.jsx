import React, { useState, useReducer, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';


function reducer(state, action) {
  switch (action.type) {
    case 'up':
      return { count: state.count + 1 };
    case 'down':
      return { count: state.count - 1 };
  }
}

function useHooks(props) {
  const [count, setCount] = useState(0);
  const el = useRef(null);


  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    console.log(el)
    // inputEl.current.focus();
  };
  // 相当于 componentDidMount 和 componentDidUpdate:

  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    console.log(props)
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p ref={el}>You clicked {count} times</p>
      <button onClick={onButtonClick}>Focus the input</button>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

    </div>
  )
}
export default useHooks;