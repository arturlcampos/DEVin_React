import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/login">
          <a className="navbar-brand" href="/registerproduct">
            Sistema de Gestão Integrada
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/maps">
                <a className="nav-link" href="/maps">
                  Maps
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/registercompany">
                <a className="nav-link" href="/registercompany">
                  Company
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/listproduct">
                <a className="nav-link" href="/listproduct">
                  List Product
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/registerproduct">
                <a className="nav-link" href="/registerproduct">
                  Product
                </a>
              </Link>
            </li>
          </ul>
          <span type="select" className="navbar-text">
            SGI
          </span>
        </div>
      </div>
    </nav>
  );
}
