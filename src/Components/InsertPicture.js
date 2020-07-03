import React from "react";

function DisplayPicture(props) {
  return (
    <div>
      <img src={props.picture} alt="sun&moon" />
    </div>
  );
}

export default DisplayPicture;
