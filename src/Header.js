import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ searchQuery, handleSearch, addedRecipesCount }) => {
  return (
    <header className="bg-dark text-white py-4">
      <div className="container d-flex justify-content-between align-items-center">
        <h1>FoodClub</h1>
        <nav className="d-flex">
          <form className="d-flex me-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
          <Link to="/shopping-list" className="btn btn-outline-light me-3">
            Shopping List ({addedRecipesCount})
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
