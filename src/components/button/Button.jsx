import "./button.styles.css";
function Button({ type, title }) {
  return <button className={type}>{title}</button>;
}
export default Button;
