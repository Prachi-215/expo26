import React from "react";
import { motion } from "framer-motion";
import useReducedMotion from "../hooks/useReducedMotion";
import "./About.css";
import about from "../assets/aboutexpo.png";

const AboutSection = () => {
  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
  const item = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
  const reduced = useReducedMotion();

  return (
    <>
    
      {/* <div className="bg-auto sm:bg-cover md:bg-cover lg:bg-cover xl:bg-cover ... bg-[url(https://media.istockphoto.com/id/1321467830/vector/red-abstract-background-abstract-luxury-red-background-valentine-layout-design-studio-room.jpg?s=612x612&w=0&k=20&c=HMi9eratTzZlDAvk-vLjpsa3TKSxjwTyWfeWLxGKoRQ=)]">
        <h1 className="text-center text-6xl font-bold pt-5 text-white">
          ABOUT STARTUP EXPO
        </h1>
        <p className="text-center text-3xl font-bold text-red-100 my-5">
          Get Ready For Product Testing and Mass Networking
        </p>
        <div id="img_and_para" className="justify-start">
          <img id="image" src={about} alt="" className="ml-20 mt-10" />

          <p className="text-2xl mx-20 my-20 font-medium text-white">
            StartupExpo is an exhibition event for startups that draws
            participants, speakers, investors, and organisations from all around
            India. Startups will have a fantastic platform to share their
            cutting-edge innovations with the rest of the world at the event,
            which will also introduce them to a fantastic community that will
            support their progress. Startups that are interested should complete
            this form:
          </p>
        </div>

        <button className="bg-black rounded text-center h-12 w-40 self-center text-white font-bold mb-10">
          Register now
        </button>
      </div> */}
      <motion.div
        className="bg-auto about text-white sm:bg-cover md:bg-cover lg:bg-cover xl:bg-cover fade-in w-full"
        id="about"
        initial={reduced ? undefined : "hidden"}
        whileInView={reduced ? undefined : "visible"}
        viewport={{ once: true, amount: 0.18 }}
        variants={reduced ? undefined : container}
      >
        <div className="py-16 bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgb(0,0,0,0.8)] bg-opacity-[0.5]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              { !reduced ? (
                <motion.img
                  className="items-center justify-center"
                  src={about}
                  alt="Home"
                  width={600}
                  variants={item}
                />
              ) : (
                <img className="items-center justify-center" src={about} alt="Home" width={600} />
              ) }

              <div className="flex flex-col justify-center">
                { !reduced ? (
                  <motion.p className="text-brand text-5xl font-bold uppercase" style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 800}} variants={item}>
                    ABOUT STARTUP EXPO
                  </motion.p>
                ) : (
                  <p className="text-brand text-5xl font-bold uppercase" style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 800}}>ABOUT STARTUP EXPO</p>
                ) }

                { !reduced ? (
                  <motion.h1 className="md:text-4xl text-3xl font-bold py-4" variants={item}>
                    Get Ready For Product Testing and Mass Networking
                  </motion.h1>
                ) : (
                  <h1 className="md:text-4xl text-3xl font-bold py-4">Get Ready For Product Testing and Mass Networking</h1>
                ) }

                { !reduced ? (
                  <motion.p className="text-xl" variants={item}>
                    StartupExpo is an exhibition event for startups that draws
                    participants, speakers, investors, and organisations from all
                    around India. Startups will have a fantastic platform to share
                    their cutting-edge innovations with the rest of the world at
                    the event, which will also introduce them to a fantastic
                    community that will support their progress. Startups that are
                    interested should complete this form:
                  </motion.p>
                ) : (
                  <p className="text-xl">StartupExpo is an exhibition event for startups that draws participants, speakers, investors, and organisations from all around India. Startups will have a fantastic platform to share their cutting-edge innovations with the rest of the world at the event, which will also introduce them to a fantastic community that will support their progress. Startups that are interested should complete this form:</p>
                ) }

                { !reduced ? (
                  <motion.button
                    className="text-white w-[200px] font-medium my-8 mx-auto md:mx-0 py-3 rounded-full btn-gradient hover:scale-105 duration-200"
                    variants={item}
                    whileHover={{ y: -6, boxShadow: "0 16px 30px rgba(254, 0, 0, 0.28)" }}
                    whileTap={{ y: -2 }}
                  >
                    <a href="#reg">Register Now</a>
                  </motion.button>
                ) : (
                  <button className="text-white w-[200px] font-medium my-8 mx-auto md:mx-0 py-3 rounded-full btn-gradient transition-transform duration-200 hover:-translate-y-1"><a href="#reg">Register Now</a></button>
                ) }
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutSection;
