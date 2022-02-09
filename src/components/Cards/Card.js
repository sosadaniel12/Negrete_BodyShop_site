import "./Card.css";
import { useState } from "react";
import { useSpring, a } from "@react-spring/web";
import model from "./styles.module.css";

const Card = (props) => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 10, tension: 400, friction: 60 },
  });

  return (
    <div className={model.container} onClick={() => set((state) => !state)}>
      <a.div
        className={`${model.c} ${model.back}`}
        style={{
          backgroundImage: `url(${props.image})`,
          opacity: opacity.to((o) => 1 - o),
          transform,
        }}
        dangerouslySetInnerHTML={{ __html: props.title }}
      />

      <a.div
        className={`${model.c} ${model.front}`}
        style={{
          opacity,
          transform,
          rotateX: "180deg",
        }}
        dangerouslySetInnerHTML={{ __html: props.description }}
      />
    </div>
  );
};

export default Card;
