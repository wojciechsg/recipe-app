import React from 'react';

const CategorySelector = ({ categories, handleCategoryChange }) => {
  return (
    <div className="mb-4">
      <select onChange={(e) => handleCategoryChange(e.target.value)} className="form-control">
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
