import AnimalsInfo from "./component/AnimalsInfo/AnimalsInfo";
import bearImg from "./images/Bear.avif";
import elephantImg from "./images/elephant.avif";
import rhinosImg from "./images/rhinos.avif";
import zebrasImg from "./images/zebras.avif";

import "./App.css";

function App() {
  return (
    <>
      <h1>Animal Planet</h1>
      <div className="imgContainer">
        <AnimalsInfo type="bear" source={bearImg} />
        <AnimalsInfo type="elephant" source={elephantImg} />
        <AnimalsInfo type="rhinos" source={rhinosImg} />
        <AnimalsInfo type="zebras" source={zebrasImg} />
      </div>
    </>
  );
}

export default App;
