import React from "react";
import { asideData } from "../constants/data";

export default function Aside() {
  return (
    <div>
      {asideData.map(({ id, icon, iconText }) => {
        return (
          <div style={{ marginBottom: "5px" }} key={id}>
            {icon}
            {iconText}
          </div>
        );
      })}
    </div>
  );
}
