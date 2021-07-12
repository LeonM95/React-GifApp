import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  //para obtener lo que se escribe en el input
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 0)
      setCategories((cats) => [inputValue, ...cats]);
    setInputValue("");
  };

  // componennte lo que se muestra
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );

  //para agregar el prop type . se usa set category xq asi inicialize el prop
  // esto se usa para obligar que se pasen los props que requerimos al momento de llamar al componente
  AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
  };
};
