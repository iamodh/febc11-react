import PropTypes from "prop-types";
import { useRef, useState } from "react";

export default function TodoInput({ addItem }) {
  const [title, setTitle] = useState("");
  const titleElem = useRef(null);

  const handleAdd = () => {
    if (title.trim() !== "") {
      addItem(title);
      setTitle("");
      titleElem.current.focus();
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") handleAdd();
  };

  return (
    <div className="todoinput">
      <input
        type="text"
        autoFocus
        onKeyUp={handleKeyUp}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        ref={titleElem}
      />
      <button type="button" onClick={handleAdd}>
        추가
      </button>
    </div>
  );
}

TodoInput.propTypes = {
  addItem: PropTypes.func.isRequired,
};
