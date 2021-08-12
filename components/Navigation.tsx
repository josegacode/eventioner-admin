import Link from "next/link";

export const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-primary bg-primary ">
    <div className="container">
      <Link href="/">
        <a className="navbar-brand text-white">Eventos</a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/members">
              <a className="nav-link text-white">Miembros</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

