import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import snakeGameImg from "/bg.jpg";
import chatAppImg from "/chatapp.jpg";
import vanillaJSAppImg from "/vanilajs.jpg";
import musicAppImg from "/chatapp.jpg";

const items = [
  {
    id: 1,
    tittle: "Snake Game",
    img: snakeGameImg,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse labore fugiat saepe enim repellendus dolorem ad voluptatibus doloribus ex soluta. Omnis architecto eius ipsa id.",
  },
  {
    id: 2,
    tittle: "Chat App",
    img: chatAppImg,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse labore fugiat saepe enim repellendus dolorem ad voluptatibus doloribus ex soluta. Omnis architecto eius ipsa id.",
  },
  {
    id: 3,
    tittle: "Vanilla JS App",
    img: vanillaJSAppImg,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse labore fugiat saepe enim repellendus dolorem ad voluptatibus doloribus ex soluta. Omnis architecto eius ipsa id.",
  },
  {
    id: 4,
    tittle: "Music App",
    img: musicAppImg,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse labore fugiat saepe enim repellendus dolorem ad voluptatibus doloribus ex soluta. Omnis architecto eius ipsa id.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    //offset:["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer"ref={ref}>
            <img src={item.img} alt="" />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.tittle}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
