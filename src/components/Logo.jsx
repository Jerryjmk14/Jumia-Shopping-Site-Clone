import React from "react";

export default function Logo({ width, src, alt, color }) {
  return (
    <img
      className="logo-img"
      src={src}
      alt={alt}
      style={{ width, backgroundColor: color }}
    />
  );
}
