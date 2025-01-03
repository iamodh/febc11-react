let _root;
let _stateValue;

const yong = (() => {
  let _root;
  let _stateValue;
  // 지정한 속성과 자식 노드를 가지는 요소 노드를 생성해서 반환
  // <button type="button" onclick="handleUp()">+</button>
  // createElement('button', { type: 'button', onclick: 'handleUp()' }, '+');
  const createElement = (tag, props, ...children) => {
    // 요소 노드 생성
    const elem = document.createElement(tag);

    // 속성 추가
    if (props) {
      for (const attrName in props) {
        const value = props[attrName];
        if (attrName.toLowerCase().startsWith("on")) {
          elem.addEventListener(attrName.toLowerCase().substring(2), value);
        } else {
          elem.setAttribute(attrName, value);
        }
      }
    }

    // 자식 노드 추가
    for (let child of children) {
      if (typeof child === "string" || typeof child === "number") {
        child = document.createTextNode(child);
      } else if (typeof child === "function") {
        child = child();
      }
      elem.appendChild(child);
    }

    return elem;
  };

  // 루트노드를 관리하는 객체를 생성해서 반환
  // createRoot(document.getElementById('root')).render(App);
  const createRoot = (rootNode) => {
    let _appComponent;
    return (_root = {
      // 루트노드 하위에 지정한 함수를 실행해서 받은 컴포넌트를 렌더링 한다.
      render(appFn) {
        _appComponent = _appComponent || appFn;
        if (rootNode.firstChild) {
          rootNode.firstChild.remove();
        }
        rootNode.appendChild(_appComponent());
      },
    });
  };
  // 상태값 관리
  // let [count, setCount] = Yong.useState(10);
  const useState = (initValue) => {
    if (_stateValue === undefined) {
      _stateValue = initValue;
    }

    function setValue(newValue) {
      const oldValue = _stateValue;
      _stateValue = newValue;

      if (!Object.is(oldValue, newValue)) {
        _root.render();
      }
    }
    return [_stateValue, setValue];
  };
  return { createElement, createRoot, useState };
})();

export default yong;
