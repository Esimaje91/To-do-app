import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="Footer">
      <p className="Footer__pending">You have 4 pending tasks</p>
      <button className="Footer__clear">Clear All</button>
    </div>
  );
}
