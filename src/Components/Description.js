import React from "react";

function Description(props) {
  return (
    <div>
      <h1>{props.descData.title}</h1>
      <p>{props.descData.desc}</p>
      <p>{props.descData.date}</p>
      <footer>{props.descData.copyright}</footer>
    </div>
  );
}

export default Description;
