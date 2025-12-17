import PropTypes from "prop-types";

const NavBar = ({ setCategory }) => {
  // Simple function to close the menu
  const closeMenu = () => {
    const nav = document.getElementById('navbarNav');
    if (nav && nav.classList.contains('show')) {
      nav.classList.remove('show');
    }
  };

  const handleCategory = (cat) => {
    setCategory(cat);
    closeMenu();
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <button className="nav-link" onClick={() => handleCategory("general")}>
          <span className="badge bg-light text-dark fs-4">General News</span>
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link" onClick={() => handleCategory("world")}>
                World
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => handleCategory("nation")}>
                Nation
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => handleCategory("business")}>
                Business
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => handleCategory("technology")}>
                Technology
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => handleCategory("entertainment")}>
                Entertainment
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => handleCategory("sports")}>
                Sports
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => handleCategory("science")}>
                Science
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => handleCategory("health")}>
                Health
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

NavBar.propTypes = {
  setCategory: PropTypes.func
};