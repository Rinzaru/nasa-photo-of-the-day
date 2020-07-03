import React, { useState, useEffect } from "react";
import axios from "axios";

function DateInput(props) {
  const [submit, setSubmit] = useState("1998-05-30");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.dateChange(submit);
      }}
    >
      <input
        placeholder={"yyyy-mm-dd"}
        value={submit}
        onChange={(e) => {
          setSubmit(e.target.value);
        }}
      />
    </form>
  );
}

export default DateInput;
