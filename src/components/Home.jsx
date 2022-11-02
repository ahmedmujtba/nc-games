import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  return (
    <div>
      <nav className="home-nav-bar"></nav>
      <ul className="ul-container">
        <li>
          <Link to="/" className="logo-link">
            <h1>NC Games</h1>
          </Link>
        </li>
      </ul>
    </div>
  );
}
