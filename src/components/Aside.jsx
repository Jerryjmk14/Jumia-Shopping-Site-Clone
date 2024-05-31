import React from "react";
import { asideData } from "../constants/data";

export default function Aside() {
  return (
    <div key={asideData.id}>
      {asideData.map(({ id, icon, iconText }) => {
        return (
          <div
            style={{
              marginBottom: "5px",
            }}
            key={id}>
            {icon}
            <span style={{ marginLeft: "10px" }}>{iconText}</span>
          </div>
        );
      })}
    </div>
  );
}
