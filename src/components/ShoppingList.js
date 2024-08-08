import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    category: "Produce",
  });

  function handleOnChange(e) {
    const itemName = e.target.name;
    const itemValue = e.target.value;

    setFormData({
      ...formData,
      [itemName]: itemValue,
    });
    console.log(formData);
  }
  // function onItemFormSubmit(e) {
  //   e.preventDefault();
  //   const newItem = {
  //     id: "",
  //     name: formData.name,
  //     category: formData.category,
  //   };
  //   console.log(newItem);
  // }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleChange(event) {
    setSearch(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    const isCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const isSearch =
      search === "" || item.name.toLowerCase().includes(search.toLowerCase());
    return isCategory && isSearch;
  });

  return (
    <div className="ShoppingList">
      <ItemForm
        onItemFormSubmit={onItemFormSubmit}
        onHandleOnChange={handleOnChange}
      />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleChange}
        search={search}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
