import React from "react";
import { motion } from "framer-motion";
import useReducedMotion from "../hooks/useReducedMotion";
import "./Register.css";

// Stagger container for smooth reveal
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.06 } }
};

const TimelineItem = ({ date, title, description, link }) => {
  const reduced = useReducedMotion();
  return (
    <motion.li className="timeline-item relative text-white" initial={reduced ? undefined : {opacity:0, y:8}} whileInView={reduced ? undefined : {opacity:1, y:0}} viewport={{once:true, amount:0.17}} whileHover={reduced ? undefined : {scale:1.02, y:-6}} transition={reduced ? undefined : {type:'spring', stiffness:140}}>
      <div className="timeline-dot absolute left-[-8px] top-1/2 transform -translate-y-1/2 bg-black w-4 h-4 border-2 border-white rounded-full" />
      <div className="timeline-card ml-6 p-4 bg-neutral-900/30 rounded-lg">
        <time className="text-sm font-normal leading-none ">{date}</time>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-base font-normal ">{description}</p>
      </div>
    </motion.li>
  );
};

const Timeline = () => {
  return (
    <div
      id="timeline"
      className="flex bg flex-col items-center justify-center h-full w-full"
    >
      <h2 className="mb-2 pt-7 text-5xl text-brand text-center py-4 font-bold uppercase" style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 800}}>
        Timeline
      </h2>
      <div className="max-w-4xl w-full mx-auto px-4">
        <motion.ol className="relative p-4" initial={useReducedMotion() ? undefined : 'hidden'} whileInView={useReducedMotion() ? undefined : 'visible'} viewport={{ once: true, amount: 0.18 }} variants={useReducedMotion() ? undefined : container}>
        <TimelineItem
          date="11 January 2026"
          title="Registration Opens"
          description="Startups will be evaluated on the basis of their market & customer base and their product showcasing capability."
          link="#"
        />
        <TimelineItem
          date="5 February 2026"
          title="Registration Closes"
          description="Deadline for the registration of startups for Expo.

          "
        />
        <TimelineItem
          date="6 February 2026"
          title="Signing of MOUs"
          description="Shortlisted Startups will be signing the MOUs and further details will be communicated."
        />
        <TimelineItem
          date="14 & 15 February 2026"
          title="Live Exhibition"
          description="Awaiting Startups to showcase their amazing ideas and products."
        />
      </motion.ol>
      </div>
    </div>
  );
};

export default Timeline;
