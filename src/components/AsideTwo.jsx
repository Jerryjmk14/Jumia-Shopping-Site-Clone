import React from "react";
import { asideTwoData } from "../constants/data";

export default function AsideTwo() {
  return (
    <div>
      {asideTwoData.map(({ id, icon, iconText, iconText2 }) => {
        return (
          <div key={id} className="aside-two">
            <img src={icon} alt={iconText} />
            <div>
              {iconText} <br />
              <>{iconText2}</>
            </div>
          </div>
        );
      })}
    </div>
  );
}
