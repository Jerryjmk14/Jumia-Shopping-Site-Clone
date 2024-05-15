import React from "react";

export default function Main({ category, data }) {
  return (
    <div className="main-wrapper">
      <h1>{category}</h1>
      <div className="main-container">
        {data.map(({ id, name, pic }) => {
          return (
            <div key={id}>
              <img src={pic} alt={name} />
              <p>{name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
