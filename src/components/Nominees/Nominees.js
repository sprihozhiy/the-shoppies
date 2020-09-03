import React from "react";
import Nominee from "./Nominee";
import { v4 as uuidv4 } from "uuid";

import "./Nominees.css";

function Nominees(props) {
  const { nominatedList, deleteNominate } = props;
  const successMessage = () => {
    return <h4>Great! You've picked 5 nominates!</h4>;
  };
  return (
    <div className="Nominees">
      <h3>Nominees:</h3>
      {nominatedList.length === 0 ? (
        <p>No results</p>
      ) : (
        <React.Fragment>
          {nominatedList.length === 5 ? successMessage() : null}
          <ul>
            {nominatedList.map((nominate) => (
              <Nominee
                title={nominate.Title}
                id={nominate.imdbID}
                key={uuidv4()}
                deleteNominate={() => deleteNominate(nominate.imdbID)}
              />
            ))}
          </ul>
        </React.Fragment>
      )}
    </div>
  );
}

export default Nominees;
