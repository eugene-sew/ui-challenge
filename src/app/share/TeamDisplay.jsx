// pages/team-display.js
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const teamConfigurations = [
  {
    id: 1,
    name: "Team 1",
    competitors: {
      competitor_1: "Fiagbedzi Sylvester",
      competitor_2: "Nabil Ablorh",
      comp1_img: "/assets/interns/sly.jpg",
      comp2_img: "/assets/interns/nab.jpeg",
    },
  },
  {
    id: 2,
    name: "Team 2",
    competitors: {
      competitor_1: "Amenyah Terry",
      comp1_img: "/assets/interns/try.JPG",
      competitor_2: "Adjorkey Enoch Kwame",
      comp2_img: "/assets/interns/nk.jpg",
    },
  },
  {
    id: 3,
    name: "Team 3",
    competitors: {
      competitor_1: "Makae Theresa Akosua",
      comp1_img: "/assets/interns/mk.jpg",
      competitor_2: "Sitty Collins Woelinam",
      comp2_img: "/assets/interns/col.jpg",
    },
  },
  {
    id: 4,
    name: "Team 4",
    competitors: {
      competitor_1: "Emmanuel Tokoli",
      competitor_2: "Emmanuel Joe Letsu",
      comp1_img: "/assets/interns/etk.jpg",
      comp2_img: "/assets/interns/joe.jpg",
    },
  },
  {
    id: 5,
    name: "Team 5",
    competitors: {
      competitor_1: "Semabia Delali",
      competitor_2: "Godson Favour",
      comp1_img: "/assets/interns/del.jpeg",
      comp2_img: "/assets/interns/fav.jpg",
    },
  },
  {
    id: 6,
    name: "Team 6",
    competitors: {
      competitor_1: "Karl Gracer Dela",
      competitor_2: "Agbozo Theodore",
      comp1_img: "/assets/interns/karl.jpg",
      comp2_img: "/assets/interns/teo.jpg",
    },
  },
  {
    id: 7,
    name: "Team 7",
    competitors: {
      competitor_1: "Emmanuel Ekeadzi",
      competitor_2: "Bright Koffie Hateka",
      comp1_img: "/assets/interns/brux.jpg",
      comp2_img: "/assets/interns/hl.jpg",
    },
  },
  {
    id: 8,
    name: "Team 8",
    competitors: {
      competitor_1: "AKOTO ERNEST",
      competitor_2: "Atisu Susana Zanetor",
      comp1_img: "/assets/interns/ent.jpg",
      comp2_img: "/assets/interns/sus.jpg",
    },
  },
];

const TeamDisplay = () => {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const currentTeam = teamConfigurations[currentTeamIndex];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTeamIndex(
        (prevIndex) => (prevIndex + 1) % teamConfigurations.length
      );
    }, 30 * 1000);

    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      setInterval(() => {
        setCurrentTeamIndex(
          (prevIndex) => (prevIndex + 1) % teamConfigurations.length
        );
      }, 30 * 1000);
    }, 10 * 1000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <div className="container mx-auto p-8 flex justify-center w-full items-center flex-col">
      {currentTeam && (
        <>
          <h1 className="text-3xl font-bold mb-4 ">
            {currentTeam.name} Members
          </h1>
          <div className="mb-2 flex gap-10 items-center w-full justify-center mt-20">
            <div className="flex flex-col items-center justify-center gap-5 w-[18rem] h-[350px] bg-gray-800 rounded-md shadow p-5">
              <Image
                src={currentTeam.competitors.comp1_img}
                width={100}
                height={100}
                alt="comp1"
                className="w-full rounded-md h-[16rem] shadow object-center"
              />
              {currentTeam.competitors.competitor_1}
            </div>
            <h1 className="text-9xl"> vs </h1>
            <div className="flex flex-col items-center justify-center gap-5 w-[18rem] h-[350px] bg-gray-800 rounded-md shadow p-5">
              <Image
                src={currentTeam.competitors.comp2_img}
                width={100}
                height={100}
                alt="comp1"
                className="w-full rounded-md h-[16rem] shadow object-center"
              />
              {currentTeam.competitors.competitor_2}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TeamDisplay;
