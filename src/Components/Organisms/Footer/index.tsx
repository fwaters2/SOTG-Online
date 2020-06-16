import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear().toString();
  return (
    <div>
      <div>
        <div
          style={{
            flexShrink: 1,
            width: "100%",
            zIndex: 5,
            backgroundColor: "lightGray",
            padding: ".5em 0",
            textAlign: "center",
          }}
        >
          {`Ⓒ${currentYear} UltiDeveloper`}
        </div>
      </div>
    </div>
  );
};

export default Footer;
