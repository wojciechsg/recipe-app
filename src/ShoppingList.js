import React from 'react';
import { Link } from 'react-router-dom';

const ShoppingList = ({ shoppingList }) => {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Shopping List</h2>
      <ul className="list-group">
        {shoppingList.map((item, index) => (
          <li key={index} className="list-group-item">{item}</li>
        ))}
      </ul>
      <Link to="/" className="btn btn-primary mt-3">Back to Recipes</Link>
    </div>
  );
};

export default ShoppingList;
