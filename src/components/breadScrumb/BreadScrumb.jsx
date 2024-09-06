import "./breadScrumb.styles.css";

function BreadScrumb({ pwd }) {
  // console.log(pwd)
  return (
    <div className="bs-container">
      <p>Home</p>
      {pwd.map((title, i) => (
        <>
          <span>{">"} </span>
          <p className={`${i === pwd.length - 1 ? "active" : ""}`}>{title}</p>
        </>
      ))}
    </div>
  );
}

export default BreadScrumb;
