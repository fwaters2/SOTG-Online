import React from "react";

export default function Signature() {
  const currentYear = new Date().getFullYear().toString();
  return (
    <div
      style={{
        flexShrink: 1,
        width: "100%",
        zIndex: 5,
        backgroundColor: "lightGray",
        padding: ".5em 0",
        textAlign: "center"
      }}
    >
      {"Ⓒ" + currentYear + " UltiDeveloper"}
    </div>
  );
}
