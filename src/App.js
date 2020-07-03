import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import DateInput from "./Components/Date";
import DisplayPicture from "./Components/InsertPicture";
import Description from "./Components/Description";

function App() {
  const [date, setDate] = useState(["1998", "05", "30"]);
  const [picture, setPicture] = useState(
    "https://apod.nasa.gov/apod/image/9703/seaice_sts45_big.jpg"
  );

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [copyright, setCopyRight] = useState("");

  function dateChange(datee) {
    const newDate = datee.split("-");
    setDate(newDate);
  }

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=C4mShNNUN3GZbfH4oCgIwgKWCeES9AXMpsk8Afnn&date=${date[0]}-${date[1]}-${date[2]}`
      )
      .then((response) => {
        console.log(response.data);
        setPicture(response.data.hdurl);
        setTitle(response.data.title);
        setDesc(response.data.explanation);
        setCopyRight(response.data.copyright);
      })
      .catch((error) => {
        console.log("No Data", error);
      });
  }, [date]);

  return (
    <div className="App">
      <DateInput dateChange={dateChange} />
      <DisplayPicture picture={picture} />
      <Description
        descData={{ title, desc, date: date.join("-"), copyright }}
      />
    </div>
  );
}

export default App;
