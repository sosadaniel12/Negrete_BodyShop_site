import style from "./Section.module.css";
import Card from "../../components/Cards/Card";
import React, { useState } from "react";
import styledEngine from "@mui/styled-engine";

const services = {
  paint: {
    title: "Paint",
    description: "Paint your vehicle with our quality paint.",
    image:
      "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.18169-9/21617620_1851544888418093_3964336788619649675_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=HKEnd_8AoGoAX9YBI20&_nc_ht=scontent-dfw5-2.xx&oh=00_AT9XVpt1SFtbcZhWgEAy9jXIrbNUcqi9mJCUuREKreablA&oe=6228FC3F",
  },
  body: {
    title: "Body",
    description: "Body your vehicle with our quality paint.",
    image:
      "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.6435-9/94952792_2474149362824306_275763464775925760_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=P8GOuJD_OFYAX-rJfJ9&tn=pHZFH3cZ5dZFEVK8&_nc_ht=scontent-dfw5-1.xx&oh=00_AT-NRCSYpvrwofieCsCReOk7w6--K6v1jWVGCuf-oLXs2w&oe=622A00AB",
  },
  detailing: {
    title: "Detailing",
    description: "Detailing your vehicle with our quality paint.",
    image:
      "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/95257941_2474149356157640_6454232370005409792_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=s0h--SUdTNEAX8_umi-&_nc_ht=scontent-dfw5-2.xx&oh=00_AT-lhiYkTS1eV2xuOcPs7kbsz7g6ImGVl7gx6bl67NeL8Q&oe=62293959",
  },
  restoration: {
    title: "Restoration",
    description: "Restoration your vehicle with our quality paint.",
    image:
      "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.18169-9/13423886_1647995202106397_5767038844395986685_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=AArvP_ld9fQAX_fiI9Q&_nc_oc=AQlaK1ZYYxGyXfEORudIu9wmLykwdhIie-ZYDU3zTkOERUL3YpkDr3ApSwaLkyVezs8&_nc_ht=scontent-dfw5-2.xx&oh=00_AT8zJLlPZox-y1xFoKCyzI1dJQDcAEwZMRFvTy98bxYitw&oe=622881DE",
  },
};

const Section = () => {
  return (
    <div className={style.section} id="Services">
      <div className={style.sectionInner}>
        <h1 className={style.sectionHeader}>Services</h1>
      </div>

      <div className={style.sectionCards}>
        {Object.keys(services).map((key) => (
          <Card
            key={key}
            title={services[key].title}
            description={services[key].description}
            image={services[key].image}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
