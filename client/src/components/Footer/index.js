import React from "react";

function Footer() {
  return (
    <footer className="footer" style={{ position: "absolute" }}>
      <span
        style={{
          fontSize: "18px",
          textAlign: "center",
          backgroundColor: "lightgray",
          position: "fixed",
          bottom: "0",
          right: "0",
          left: "0",
          padding: "3px"
        }}
      >
        Taylor Ceneviva GitHub:@taylorceneviva &amp; OSU Coding Bootcamp
      </span>
    </footer>
  );
}

export default Footer;