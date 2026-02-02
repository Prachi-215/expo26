import React from "react";
import { motion } from "framer-motion";
import useReducedMotion from "../hooks/useReducedMotion";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Logo from "../assets/Expo.png";
import Ecell from "../assets/ecell-white-img.webp";
import "./global.css";
import brochure from "../assets/Start-up25_brochure.pdf";

function Homepage() {
  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
  const item = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
  const reduced = useReducedMotion();

  return (
    <>
      <div className="">
        <Navbar fluid className="bg-black/40 backdrop-blur-md fixed top-0 w-full z-50">
          <NavbarBrand>
            <a href="https://www.ecellvnit.org/">
              <img src={Ecell} alt="logo" className="mr-3 h-[50px] md:h-9" />
            </a>
            {/* <img src={Logo} alt="logo" className="mr-3 h-6 sm:h-9" /> */}
          </NavbarBrand>

          <div className="flex md:order-2 items-center">
            <NavbarToggle />
          </div>
          <NavbarCollapse>
            <NavbarLink href="#" className="text-white text-lg md:text-xl">
              Home
            </NavbarLink>
            <NavbarLink href="#about" className="text-white text-lg md:text-xl">
              About Expo
            </NavbarLink>
            <NavbarLink href="#timeline" className="text-white text-lg md:text-xl">
              Timeline
            </NavbarLink>
            <NavbarLink href="#reg" className="text-white text-lg md:text-xl">
              Register
            </NavbarLink>
            <NavbarLink href="#contact" className="text-white text-lg md:text-xl">
              Contact Us
            </NavbarLink>
          </NavbarCollapse>
        </Navbar>
        {/* <div className=" h-screen">
          <div className="flex gap-10 absolute top-3/4 w-full justify-center">
            <Button className="w-2/12 px-8 py-4 bg-gradient-to-r from-red-500 to-red-800 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg ">
              Register
            </Button>
            <Button className="w-2/12 px-8 py-4 bg-gradient-to-r from-red-500 to-red-800 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg ">
              Contact Us
            </Button>
          </div>
        </div> */}
        <div className="relative w-full h-screen mx-auto">
          <div className="bg-no-repeat bg-cover home bg-gray-900  bg-blend-difference bg-origin-border bg-center absolute inset-0 min-h-screen max-w-full ">
            <div className="h-screen bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgb(0,0,0,0.8)]">
              {/* <Navbar /> */}
              <div className="flex flex-col justify-center items-center text-white px-2 pt-20 md:pt-4 md:py-4 lg:py-10 xl:px-20 w-full">
                <motion.div className="grid grid-rows-1 gap-4 items-center w-full" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={container}>
                  <motion.img
                    src={Logo}
                    alt="Expo"
                    className="pt-10 mx-auto block contrast-100 w-full max-w-[1100px] h-auto"
                    initial={{ opacity: 0, scale: 0.2, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{ 
                      duration: 1.2, 
                      delay: 1.35,
                      ease: [0.34, 1.56, 0.64, 1]
                    }}
                  />

                  <motion.h2 
                    variants={item} 
                    className="gradient-text text-4xl md:text-6xl font-extrabold mt-6 text-center typing-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 0.3 }}
                  >
                    Launch. Connect. Grow.
                  </motion.h2>
                  {/* call-to-action buttons moved to replace the paragraph */}
                  <div className="relative w-full mt-4">
                    {/* animated gradient layer (rotates slowly) */}
                    { !reduced ? (
                      <motion.div className="bg-animated" animate={{ rotate: [0, 60, 120, 180, 240, 300, 360] }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} />
                    ) : null }

                    {/* floating colorful blobs */}
                    { !reduced ? (
                      <motion.div className="blob red" animate={{ x: [0, -18, 6, 0], y: [0, -8, 6, 0], opacity: [0.12, 0.2, 0.12, 0.14] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }} />
                    ) : null }
                    { !reduced ? (
                      <motion.div className="blob blue" animate={{ x: [0, 14, -6, 0], y: [0, 10, -6, 0], opacity: [0.12, 0.18, 0.12, 0.14] }} transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }} />
                    ) : null }

                    <div className="flex flex-col gap-6 md:gap-8 pt-8 justify-center items-center z-40 relative content-foreground">
                      <div className="flex flex-col items-center md:items-start md:flex-row justify-center gap-4 md:gap-8 w-full h-full">
                        { !reduced ? (
                          <motion.a
                            variants={item}
                            href="#reg"
                            whileHover={!reduced ? { y: -6, scale: 1.03 } : undefined}
                            whileTap={!reduced ? { scale: 0.98 } : undefined}
                            className="inline-block w-full max-w-xs md:w-auto text-white font-semibold rounded-full transform-gpu hover:-translate-y-1 hover:shadow-2xl px-10 py-5 md:px-12 md:py-5 text-lg md:text-xl text-center transition btn-gradient shadow-2xl z-40"
                            aria-label="Register for StartUp Expo"
                          >
                            Register
                          </motion.a>
                        ) : (
                          <a href="#reg" className="inline-block w-full max-w-xs md:w-auto text-white font-semibold rounded-full px-10 py-5 md:px-12 md:py-5 text-lg md:text-xl text-center transition btn-gradient shadow-2xl z-40" aria-label="Register for StartUp Expo">Register</a>
                        ) }

                        { !reduced ? (
                          <motion.a
                            variants={item}
                            target="_blank"
                            rel="noreferrer"
                            href={brochure}
                            download="StartUp Expo Brochure.pdf"
                            whileHover={!reduced ? { y: -6, scale: 1.03 } : undefined}
                            whileTap={!reduced ? { scale: 0.98 } : undefined}
                            className="inline-block w-full max-w-xs md:w-auto text-white font-semibold rounded-full transform-gpu hover:-translate-y-1 hover:shadow-2xl px-10 py-5 md:px-12 md:py-5 text-lg md:text-xl text-center transition btn-gradient shadow-2xl z-40"
                            aria-label="Download StartUp Expo Brochure"
                          >
                            Brochure
                          </motion.a>
                        ) : (
                          <a target="_blank" rel="noreferrer" href={brochure} download="StartUp Expo Brochure.pdf" className="inline-block w-full max-w-xs md:w-auto text-white font-semibold rounded-full px-10 py-5 md:px-12 md:py-5 text-lg md:text-xl text-center transition btn-gradient shadow-2xl z-40" aria-label="Download StartUp Expo Brochure">Brochure</a>
                        ) }
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
