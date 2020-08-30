import React from "react";
import Nominee from "./Nominee";

import "./Nominees.css";

function Nominees() {
  return (
    <div className="Nominees">
      <h3>Nominees</h3>
      <ul>
        <Nominee />
      </ul>
    </div>
  );
}

export default Nominees;
