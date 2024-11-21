import "./Button.css";
import PropTypes from "prop-types";

export default function Button({ children, type = "button", onClick, color }) {
  return (
    <button
      style={{ backgroundColor: color }}
      className="rounded-button"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
};
