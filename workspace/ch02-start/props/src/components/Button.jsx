import "./Button.css";

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
