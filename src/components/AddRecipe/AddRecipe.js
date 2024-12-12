import React, { useState } from 'react';
import './AddRecipe.css';

const AddRecipe = ({ addRecipe }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { id: Date.now(), name, description, image };
    addRecipe(newRecipe);
    setName('');
    setDescription('');
    setImage('');
  };

  return (
    <form className="add-recipe" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Название блюда"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Описание рецепта"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Ссылка на изображение"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <button type="submit">Добавить рецепт</button>
    </form>
  );
};

export default AddRecipe;
