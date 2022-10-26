import { useRef } from "react";
import { Particle } from "./Particle/Particle";
import s from "./Particles.module.scss";
import { particlesData } from "./particlesData";

export const Particles = () => {
    const ref = useRef();

    const particlesItems = particlesData.map((item) => <Particle parentRef={ref.current} {...item} />);
    return <div ref={ref} className={s.wrap}>{particlesItems}</div>;
};
