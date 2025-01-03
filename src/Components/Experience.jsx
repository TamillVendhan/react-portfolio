
import React from "react";
import html from "../assets/assets/html.png";
import css from "../assets/assets/css.png";
import javascript from "../assets/assets/javascript.png";
import react from "../assets/assets/react.png";
import tailwind from "../assets/assets/tailwind.png";
import redux from "../assets/assets/redux.svg";
import github from "../assets/assets/github.png";
import node from "../assets/assets/node.png";
import mysql from "../assets/assets/mysql.png";
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-600",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-400",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-sky-500",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: redux,
      title: "Redux",
      style: "shadow-purple-600",
    },
    
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: node,
      title: "Node",
      style: "shadow-lime-500",
    },
    {
      id: 9,
      src: mysql,
      title: "mysql",
      style: "shadow-blue-400",
    },
    
  ];



  const experienceVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div name="experience" className="w-full min-h-screen py-10  text-center bg-gradient-to-b from-gray-800 to-black">
       
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        
        <div

          initial="hidden"
        
          variants={experienceVariant}
        >
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
          
            Experience
          </p>
          <p className="py-6">Technologies I have experience with.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
        {/* w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 */}
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              initial="hidden"
              
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.3 },
                },
              }}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;