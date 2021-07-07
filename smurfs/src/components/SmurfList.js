import React from "react";
import Smurf from "./Smurf";

const SmurfList = props => {
  return (
    <div>
      {props.smurfs.map(smurf => {
        return (
          <Smurf
            updateSmurf={props.updateSmurf}
            deleteSmurf={props.deleteSmurf}
            key={smurf.id}
            smurf={smurf}
          />
        );
      })}
    </div>
  );
};
export default SmurfList;
