import "./animalsInfo.style.css";

const AnimalsInfo = ({ type, source }) => {
  return <img className={type} src={source} alt=""></img>;
};

export default AnimalsInfo;
