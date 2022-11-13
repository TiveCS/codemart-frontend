import { useState } from "react";
import FilterButton from "./FilterButton";

export default function CategoryField() {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const handleChange = (event) => {
    event.preventDefault();
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setCategories([...categories, category]);
    setCategory("");
  };

  const handleDelete = (event, category) => {
    event.preventDefault();

    const newCategories = categories.filter((c) => c !== category);

    setCategories(newCategories);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>Categories</p>
        <input
          type="text"
          placeholder="Search for a category"
          className="border border-recandy-gray-50 py-3 px-4 rounded-md text-sm w-full"
          onChange={handleChange}
          value={category}
        />

        <input type="submit" value="Submit" hidden />
      </form>

      <div className="flex flex-row justify-start space-x-2 mt-4">
        {categories.map((category) => {
          return (
            <FilterButton key={category} handleDelete={handleDelete}>
              {category}
            </FilterButton>
          );
        })}
      </div>
    </>
  );
}
