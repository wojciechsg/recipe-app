import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaHeart, FaRegHeart, FaPlus } from 'react-icons/fa';

const RecipeCard = ({ recipe, isFavorite, handleToggleFavorite, handleAddToShoppingList }) => {
  const [showRecipe, setShowRecipe] = useState(false);

  const handleClose = () => setShowRecipe(false);
  const handleShow = () => setShowRecipe(true);

  return (
    <>
      <div className="card" style={{ width: '25rem', height: '20rem' }} onClick={handleShow}>
        <img
          src={recipe.image}
          className="card-img-top"
          alt={recipe.title}
          style={{ height: '85%', objectFit: 'cover' }}
        />
        <div className="card-body" style={{ height: '10%' }}>
          <h5 className="card-title">{recipe.title}</h5>
          <button
            className="btn"
            onClick={(e) => {
              e.stopPropagation();
              handleToggleFavorite();
            }}
          >
            {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
          </button>

          <button
            className="btn btn-primary btn-sm ms-2"
            onClick={(e) => {
              e.stopPropagation(); 
              handleAddToShoppingList();
            }}
          >
            <FaPlus /> Add to Shopping List
          </button>
        </div>
      </div>

      <Modal show={showRecipe} onHide={handleClose}>
      <Modal.Header closeButton>
    <Modal.Title>{recipe.title}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <h5>Ingredients:</h5>
    <ul>
      {recipe.ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
    <h5>Instructions:</h5>
    <p>{recipe.instructions}</p>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
  </Modal.Footer>
      </Modal>
    </>
  );
};

export default RecipeCard;
