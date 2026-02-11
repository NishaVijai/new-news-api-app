import PropTypes from "prop-types";
import { useState } from "react";

const NavBar = ({ setCategory }) => {
  const [activeCategory, setActiveCategory] = useState("top");

  const categories = [
    { name: "World", category: "world" },
    { name: "Nation", category: "domestic" },
    { name: "Business", category: "business" },
    { name: "Technology", category: "technology" },
    { name: "Entertainment", category: "entertainment" },
    { name: "Sports", category: "sports" },
    { name: "Science", category: "science" },
    { name: "Health", category: "health" },
  ];

  const validCategories = [
    "top",
    "world",
    "domestic",
    "business",
    "technology",
    "entertainment",
    "sports",
    "science",
    "health",
  ];

  // Ensure only valid categories are passed
  const handleCategory = (cat) => {
    const validCategory = validCategories.includes(cat) ? cat : "top";
    setCategory(validCategory);
    setActiveCategory(validCategory);
    closeMenu();
  };

  const closeMenu = () => {
    const nav = document.getElementById("navbarNav");
    if (nav && nav.classList.contains("show")) {
      nav.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container">
        <button
          className="navbar-toggler ms-auto"
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
          {/* LEFT - General News button with badge */}
          <div className="d-lg-flex align-items-center">
            <button
              className="nav-link px-2"
              onClick={() => handleCategory("top")}
            >
              <span
                className={`badge fs-5 px-3 py-2 ${activeCategory === "top" ? "bg-warning text-dark" : "bg-light text-dark"
                  }`}
              >
                Top News
              </span>
            </button>
          </div>

          {/* CENTER - Other category buttons without badge */}
          <ul className="navbar-nav mx-auto text-center">
            {categories.map((cat) => (
              <li key={cat.category} className="nav-item">
                <button
                  className={`nav-link px-3 ${activeCategory === cat.category ? "nav-active" : ""
                    }`}
                  onClick={() => handleCategory(cat.category)}
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>

          {/* RIGHT spacer for balance */}
          <div className="d-none d-lg-block" style={{ width: "120px" }}></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

NavBar.propTypes = {
  setCategory: PropTypes.func.isRequired,
};
