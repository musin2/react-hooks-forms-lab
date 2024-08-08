import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function ItemForm({ onItemFormSubmit, onHandleOnChange }) {

  const [name, setName] =useState();
  const [category, setCategory] = useState();

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onItemFormSubmit({id:uuid(),name:name,category: category,});
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
