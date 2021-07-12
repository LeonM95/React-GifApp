import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  //use estate para actualizar html
  const [categories, setCategories] = useState(["anime"]);

  return (
    <div>
      <h2 className="title">Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ul>
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </ul>
    </div>
  );
};
