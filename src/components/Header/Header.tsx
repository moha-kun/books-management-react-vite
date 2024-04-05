import { Link } from "react-router-dom";

function Header() {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link to='/books' className="nav-link">Books</Link>
      </li>
      <li className="nav-item">
        <Link to='/users' className="nav-link">Users</Link>
      </li>
    </ul>
  );
}

export default Header;
