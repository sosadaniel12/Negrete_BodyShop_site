import "./Card.css";

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <div>
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
