import React from "react";

const Smurf = ({ deleteSmurf, updateSmurf, smurf }) => {
  return (
    <div>
      <h2>{smurf.name}</h2>
      <p>{smurf.age}</p>
      <p>{smurf.height}</p>
      <button onClick={() => deleteSmurf(smurf.id)}>Delete Smurf</button>
    </div>
  );
};
export default Smurf;
