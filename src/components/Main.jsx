import React from "react";

export default function Main({ category, data, id }) {
  return (
    <div className="main-wrapper">
      <h1>{category}</h1>
      <div className="main-container" key={id}>
        {data.map(({ name, pic }) => {
          return (
            <div key={name}>
              <img src={pic} alt={name} />
              <p>{name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
