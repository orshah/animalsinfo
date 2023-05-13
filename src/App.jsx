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
      <h2>Click on pictures to learn more</h2>
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
          <p className="bearInfo">
            Polar bears are the largest carnivorous land mammals on Earth. They
            are about seven to eight feet long, measured from the nose to the
            tip of their very short tail. Male polar bears are much larger than
            the females. A large male can weigh more than 1,700 pounds, while a
            large female is about half that size (up to 1,000 pounds). Bears can
            weigh about 50 percent more after a successful hunting season than
            they do at the start of the next; most of this additional weight is
            accumulated fat. A newborn polar bear weighs only about 1.5 pounds.
          </p>
        </div>
      ) : null}
      {showElephantInfo ? (
        <div>
          <p className="elephantInfo">
            Elephants are the largest land mammals on earth and have distinctly
            massive bodies, large ears, and long trunks. They use their trunks
            to pick up objects, trumpet warnings, greet other elephants, or suck
            up water for drinking or bathing, among other uses. Both male and
            female African elephants grow tusks and each individual can either
            be left- or right-tusked, and the one they use more is usually
            smaller because of wear and tear. Elephant tusks serve many
            purposes. These extended teeth can be used to protect the elephant's
            trunk, lift and move objects, gather food, and strip bark from
            trees. They can also be used for defense. During times of drought,
            elephants even use their tusks to dig holes to find water
            underground
          </p>
        </div>
      ) : null}
      {showRhinosInfo ? (
        <div>
          <p className="rhinosInfo">
            Rhinos once roamed many places throughout Europe, Asia, and Africa
            and were known to early Europeans who depicted them in cave
            paintings. At the beginning of the 20th century, 500,000 rhinos
            roamed Africa and Asia. By 1970, rhino numbers dropped to 70,000,
            and today, around 27,000 rhinos remain in the wild. Very few rhinos
            survive outside national parks and reserves due to persistent
            poaching and habitat loss over many decades. Three species of
            rhino—black, Javan, and Sumatran—are critically endangered. Today, a
            small population of Javan rhinos is found in only one national park
            on the northern tip of the Indonesian island of Java. A mainland
            subspecies of the Javan rhino was declared extinct in Vietnam in
            2011. Successful conservation efforts have led to an increase in the
            number of greater one-horned (or Indian) rhinos, from around 200 at
            the turn of the 20th century to around 3,700 today. The greater
            one-horned rhino is one of Asias biggest success stories, with their
            status improving from endangered to vulnerable following significant
            population increases. However, the species still remains under
            threat from poaching for its horn and from habitat loss and
            degradation.Rhinos once roamed many places throughout Europe, Asia,
            and Africa and were known to early Europeans who depicted them in
            cave paintings. At the beginning of the 20th century, 500,000 rhinos
            roamed Africa and Asia. By 1970, rhino numbers dropped to 70,000,
            and today, around 27,000 rhinos remain in the wild. Very few rhinos
            survive outside national parks and reserves due to persistent
            poaching and habitat loss over many decades.
          </p>
        </div>
      ) : null}
      {showZebrasInfo ? (
        <div>
          <p className="zebrasInfo">
            Zebras are single-hoofed animals that are native to Africa. Zebras
            are very closely related to horses and donkeys; in fact, they are in
            the same genus, Equus. The most prominent feature of zebras is the
            bold patterns on their coats. Zebras have white stripes next to
            black or brown stripes, with the stripes ending at their bellies and
            the inner side of the legs, which are white, according to the San
            Diego Zoo. However, zebras have black skin under their coats. Each
            species of zebra has a different general pattern of stripes. The
            Grevy's zebra has very thin stripes. The mountain zebra has vertical
            stripes on its neck and torso, but horizontal stripes on its
            haunches. Some subspecies of plains zebras have brownish "shadow"
            stripes between the black stripes, according to the San Diego Zoo.
          </p>
        </div>
      ) : null}
    </>
  );
}

export default App;
