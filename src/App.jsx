import AnimalsInfo from "./component/AnimalsInfo/AnimalsInfo";
import bearImg from "./images/Bear.avif";
import elephantImg from "./images/elephant.avif";
import rhinosImg from "./images/rhinos.avif";
import zebrasImg from "./images/zebras.avif";
import React, { useState } from "react";

import "./App.css";

function App() {
  const [showBearInfo, setShowBearInfo] = useState(false);
  const [showElephantInfo, setShowElephantInfo] = useState(false);
  const [showRhinosInfo, setShowRhinosInfo] = useState(false);
  const [showZebrasInfo, setShowZebrasInfo] = useState(false);

  const clickBear = () => {
    setShowBearInfo(true);
    setShowElephantInfo(false);
    setShowRhinosInfo(false);
    setShowZebrasInfo(false);
  };

  const clickElephant = () => {
    setShowBearInfo(false);
    setShowElephantInfo(true);
    setShowRhinosInfo(false);
    setShowZebrasInfo(false);
  };

  const clickRhinos = () => {
    setShowBearInfo(false);
    setShowElephantInfo(false);
    setShowRhinosInfo(true);
    setShowZebrasInfo(false);
  };

  const clickZebras = () => {
    setShowBearInfo(false);
    setShowElephantInfo(false);
    setShowRhinosInfo(false);
    setShowZebrasInfo(true);
  };

  return (
    <>
      <h1>Animal Planet</h1>
      <div className="imgContainer">
        <AnimalsInfo type="bear" source={bearImg} onClickHandler={clickBear} />
        <AnimalsInfo
          type="elephant"
          source={elephantImg}
          onClickHandler={clickElephant}
        />
        <AnimalsInfo
          type="rhinos"
          source={rhinosImg}
          onClickHandler={clickRhinos}
        />
        <AnimalsInfo
          type="zebras"
          source={zebrasImg}
          onClickHandler={clickZebras}
        />
      </div>
      {showBearInfo ? (
        <div>
          <p className="bearInfo">Bear information</p>
        </div>
      ) : null}
      {showElephantInfo ? (
        <div>
          <p className="elephantInfo">Elephant information</p>
        </div>
      ) : null}
      {showRhinosInfo ? (
        <div>
          <p className="rhinosInfo">Rhinos information</p>
        </div>
      ) : null}
      {showZebrasInfo ? (
        <div>
          <p className="zebrasInfo">Zebras information</p>
        </div>
      ) : null}
    </>
  );
}

export default App;
