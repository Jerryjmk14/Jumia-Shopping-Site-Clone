import React from "react";
import { IoSearchSharp } from "react-icons/io5";

export default function SearchInput({ width, padding, children, color }) {
  return (
    <div className="search-input-wrapper" style={{ width: "50%" }}>
      <div className="search-input">
        <IoSearchSharp />
        <input
          type="text"
          placeholder={"Search products, brands and categories"}
          style={{ width, padding }}
        />
      </div>
      <button style={{ backgroundColor: color }}>{children}</button>
    </div>
  );
}
