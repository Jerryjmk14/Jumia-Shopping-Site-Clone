import React from "react";
import SearchInput from "./SearchInput";

export default function Footer({ width, padding, children }) {
  return (
    <SearchInput
      width={width}
      padding={padding}
      children="Submit"
      color="#E07E1B"
    />
  );
}
