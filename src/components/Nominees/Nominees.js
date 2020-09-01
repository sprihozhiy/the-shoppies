import React from "react";
import Nominee from "./Nominee";
import { v4 as uuidv4 } from "uuid";

import "./Nominees.css";

function Nominees(props) {
  const { nominatedList } = props;
  return (
    <div className="Nominees">
      <h3>Nominees:</h3>
      {nominatedList.length === 0 ? (
        <p>No results</p>
      ) : (
        <ul>
          {nominatedList !== [] &&
            nominatedList.map((nominant) => (
              <Nominee
                title={nominant.Title}
                id={nominant.imdbID}
                key={uuidv4()}
              />
            ))}
        </ul>
      )}
    </div>
  );
}

export default Nominees;
