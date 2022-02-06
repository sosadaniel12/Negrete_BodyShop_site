import "./Section.css";
import Card from "../../components/Cards/Card";
const services = {
  paint: {
    title: "Paint",
    description: "Paint your vehicle with our quality paint.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFEXHhrxQo7y7l9OL5ycEy_tvrVm8lxqntfg&usqp=CAU",
  },
  body: {
    title: "Body",
    description: "Body your vehicle with our quality paint.",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/003/694/243/small/car-icon-in-flat-style-simple-traffic-icon-free-vector.jpg",
  },
  detailing: {
    title: "Detailing",
    description: "Detailing your vehicle with our quality paint.",
    image:
      "https://st2.depositphotos.com/1029662/45205/v/600/depositphotos_452051896-stock-illustration-professional-auto-car-detailer-icons.jpg",
  },
  restoration: {
    title: "Restoration",
    description: "Restoration your vehicle with our quality paint.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxdMW4V_P5-cuVpDrJ_QiUvVr9FILL63IBKQ&usqp=CAU",
  },
};

const Section = () => {
  return (
    <div className="section">
      <div className="section-inner">
        <h1 className="section-header">Services</h1>
      </div>
      <div className="section-content">
        <div className="section-cards">
          {Object.keys(services).map((key) => (
            <Card
              key={key}
              title={services[key].title}
              description={services[key].description}
              image={services[key].image}
              className="section-card"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
