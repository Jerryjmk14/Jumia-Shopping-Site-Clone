import React from "react";
import { clearanceSales } from "../constants/data";

export default function FlashSales() {
  return (
    <div className="flashsales">
      {clearanceSales.map(({ pic, id, name }) => {
        return (
          <div key={id} style={{ width: "15%", margin: "0 auto" }}>
            <img src={pic} alt={name} />
            <p>{name}</p>
          </div>
        );
      })}
    </div>
  );
}
