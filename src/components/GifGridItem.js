import React from "react";

export const GifGridItem = (props) => {
  return (
    <div className="card animate__animated animate__flipInX ">
      <img src={props.url} alt={props.title} />
    </div>
  );
};