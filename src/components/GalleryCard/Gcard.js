import "./Gcard.css";

const Gcard = (props) => {
  return (
    <div className="gcard">
      <div>
        <img src={props.image} alt={props.alt} className="gcard-image" />
      </div>
    </div>
  );
};

export default Gcard;
