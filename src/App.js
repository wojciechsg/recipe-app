import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import CategorySelector from './CategorySelector';
import RecipeCard from './RecipeCard';
import ShoppingList from './ShoppingList.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [recipes, setRecipes] = useState(() => [
    {
      title: 'Classic Margherita Pizza',
      ingredients: ['Pizza dough', 'Tomato sauce', 'Fresh mozzarella', 'Basil leaves', 'Olive oil', 'Salt'],
      instructions: 'Roll out pizza dough. Spread tomato sauce, add mozzarella slices, and basil leaves. Drizzle with olive oil. Bake in a hot oven until crust is golden.',
      image: 'images/margherita_pizza.jpg',
      category: 'Pizza',
      isFavorite: false,
    },
    {
      title: 'Caesar Salad',
      ingredients: ['Romaine lettuce', 'Croutons', 'Parmesan cheese', 'Chicken breast', 'Caesar dressing'],
      instructions: 'Chop lettuce, grill chicken, and slice. Toss lettuce, croutons, and dressing. Add grilled chicken slices. Sprinkle with grated Parmesan.',
      image: 'images/caesar_salad.jpg',
      category: 'Salad',
      isFavorite: false,
    },
    {
      title: 'Beef Tacos',
      ingredients: ['Ground beef', 'Taco seasoning', 'Tortillas', 'Lettuce', 'Tomatoes', 'Shredded cheese', 'Sour cream'],
      instructions: 'Cook ground beef with taco seasoning. Warm tortillas. Assemble tacos with beef, lettuce, tomatoes, cheese, and sour cream.',
      image: 'images/beef_tacos.jpg',
      category: 'Mexican',
      isFavorite: false,

    },
    {
      title: 'Grilled Salmon with Asparagus',
      ingredients: ['Salmon fillets', 'Asparagus', 'Olive oil', 'Lemon', 'Salt', 'Black pepper'],
      instructions: 'Marinate salmon in olive oil, lemon juice, salt, and pepper. Grill salmon and asparagus until cooked. Serve with lemon wedges.',
      image: 'images/grilled_salmon.jpg',
      category: 'Seafood',
      isFavorite: false,
    },
    {
      title: 'Vegetable Stir-Fry',
      ingredients: ['Broccoli', 'Carrots', 'Bell peppers', 'Onion', 'Garlic', 'Soy sauce', 'Sesame oil'],
      instructions: 'Chop vegetables. Heat oil in a pan. Add garlic and onion. Stir-fry vegetables, adding soy sauce and sesame oil. Serve hot.',
      image: 'images/vegetable_stir_fry.jpg',
      category: 'Vegetarian',
      isFavorite: false,
    },
    {
      title: 'Penne Arrabbiata',
      ingredients: ['Penne pasta', 'Tomatoes', 'Garlic', 'Red chili flakes', 'Basil', 'Olive oil'],
      instructions: 'Cook penne. Sauté garlic and red chili flakes in olive oil. Add chopped tomatoes and cook until thickened. Toss with cooked pasta and basil.',
      image: 'images/penne_arrabbiata.jpg',
      category: 'Pasta',
      isFavorite: false,
    },
    {
      title: 'Banana Bread',
      ingredients: ['Ripe bananas', 'Flour', 'Sugar', 'Eggs', 'Butter', 'Baking soda', 'Vanilla extract'],
      instructions: 'Mash bananas. Mix with sugar, eggs, melted butter, and vanilla. Stir in flour and baking soda. Bake in a loaf pan until golden brown.',
      image: 'images/banana_bread.jpg',
      category: 'Baking',
      isFavorite: false,
    },
    {
      title: 'Chicken Alfredo Pasta',
      ingredients: ['Fettuccine pasta', 'Chicken breast', 'Heavy cream', 'Parmesan cheese', 'Garlic', 'Butter'],
      instructions: 'Cook fettuccine. Sauté chicken. Add cream, garlic, butter, and Parmesan. Toss with cooked pasta until coated. Serve hot.',
      image: 'images/chicken_alfredo.jpg',
      category: 'Italian',
      isFavorite: false,
    },
    {
      title: 'Fruit Smoothie Bowl',
      ingredients: ['Frozen mixed berries', 'Banana', 'Greek yogurt', 'Granola', 'Honey', 'Chia seeds'],
      instructions: 'Blend berries, banana, and yogurt. Pour into a bowl. Top with granola, honey, and chia seeds.',
      image: 'images/smoothie_bowl.jpg',
      category: 'Breakfast',
      isFavorite: false,
    }
  
  ], []);


  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [availableCategories, setAvailableCategories] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  const [addedRecipesCount, setAddedRecipesCount] = useState(0);

  const handleToggleFavorite = (index) => {
    const updatedRecipes = [...recipes];
    updatedRecipes[index].isFavorite = !updatedRecipes[index].isFavorite;
    setRecipes(updatedRecipes);
  };

  useEffect(() => {
    const categories = recipes.reduce((acc, recipe) => {
      if (!acc.includes(recipe.category)) {
        acc.push(recipe.category);
      }
      return acc;
    }, []);

    setAvailableCategories(categories);
  }, [recipes]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToShoppingList = (ingredients) => {
    setShoppingList((prevShoppingList) => [...prevShoppingList, ...ingredients]);
    setAddedRecipesCount((prevCount) => prevCount + 1);
  };



  const filteredRecipes = recipes.filter((recipe) => {
    const matchQuery = recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory =
      selectedCategory === '' || recipe.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchQuery && matchCategory;
  });

  return (
    <Router>
      <div>
        <Header searchQuery={searchQuery} handleSearch={handleSearch} addedRecipesCount={addedRecipesCount} />
        <div className="container my-5">
          <CategorySelector
            categories={availableCategories}
            handleCategoryChange={handleCategoryChange}
          />
          <Routes>
            <Route
              path="/"
              element={
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  {filteredRecipes.map((recipe, index) => (
                    <div key={index} className="col mb-4">
                      <RecipeCard
                        recipe={recipe}
                        isFavorite={recipe.isFavorite || false}
                        handleToggleFavorite={() => handleToggleFavorite(index)}
                        handleAddToShoppingList={() => handleAddToShoppingList(recipe.ingredients)}
                      />
                    </div>
                  ))}
                </div>
              }
            />
            <Route path="/shopping-list" element={<ShoppingList shoppingList={shoppingList} />} />
          </Routes>
        </div>
        <Footer />
        </div>
    </Router>
  );
};

export default App;
