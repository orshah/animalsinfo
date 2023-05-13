import "./animalsInfo.style.css";

const AnimalsInfo = ({ type, source, onClickHandler }) => {
  return (
    <img className={type} src={source} alt="" onClick={onClickHandler}></img>
  );
};

export default AnimalsInfo;
