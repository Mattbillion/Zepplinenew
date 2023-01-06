import "../Styles/Header.css";
export default function Header() {
  return (
    <div className="header-container">
      <img className="header-logo" src="./assets/logo.png" alt="logo" />
      <ul className="header-nav">
        <li>
          <a href="#">PORTFOLIO</a>
        </li>
        <li className="active">
          <a href="#">BLOG</a>
        </li>
        <li>
          <a href="#">CV</a>
        </li>
        <li>
          <a href="#">STORE</a>
        </li>
        <li>
          <a href="#">FREELANCE</a>
        </li>
        <li>
          <a href="#">ABOUT ME</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
      </ul>
    </div>
  );
}
