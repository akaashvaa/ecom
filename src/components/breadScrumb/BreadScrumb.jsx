import "./breadScrumb.styles.css";

function BreadScrumb({ pwd }) {
  // console.log(pwd)
  return (
    <div className="bs-container">
      <p>Home</p>
      {pwd.map((title, i) => (
        <div className="bs-row" key={title}>
          <span>{">"} </span>
          <p className={`${i === pwd.length - 1 ? "active" : ""}`}>{title}</p>
        </div>
      ))}
    </div>
  );
}

export default BreadScrumb;
