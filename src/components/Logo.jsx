import React from "react";

export default function Logo({ width, src, alt, color, padding }) {
  return (
    <img
      className="logo-img"
      src={src}
      alt={alt}
      style={{ width, backgroundColor: color, padding }}
    />
  );
}
