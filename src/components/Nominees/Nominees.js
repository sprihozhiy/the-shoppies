import React from "react";
import Nominee from "./Nominee";
import { v4 as uuidv4 } from "uuid";

import "./Nominees.css";

function Nominees(props) {
  const { nominatedList, deleteNominate } = props;
  return (
    <div className="Nominees">
      <h3>Nominees:</h3>
      {nominatedList.length === 0 ? (
        <p>No results</p>
      ) : (
        <ul>
          {nominatedList !== [] &&
            nominatedList.map((nominate) => (
              <Nominee
                title={nominate.Title}
                id={nominate.imdbID}
                key={uuidv4()}
                deleteNominate={() => deleteNominate(nominate.imdbID)}
              />
            ))}
        </ul>
      )}
    </div>
  );
}

export default Nominees;
