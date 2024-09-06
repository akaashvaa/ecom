import "./button.styles.css";
function Button({ type, title, onClick = () => {} }) {
  return (
    <button onClick={onClick} id="btn" className={type}>
      {title}
    </button>
  );
}
export default Button;
