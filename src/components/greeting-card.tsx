/* eslint-disable react/jsx-key */
import React from "react";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiJavascript,
  SiGoland,
} from "react-icons/si";

export default function GreetingCard() {
  const icons = [
    <SiNextdotjs size={30} />,
    <SiReact size={30} />,
    <SiTypescript size={30} />,
    <SiJavascript size={30} />,
    <SiGoland size={30} />,
  ];
  return (
    <div className="text-center mb-44 px-20 mt-[10rem]">
      <p className="text-gray-300">Hi, My name is</p>
      <div className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
        <span className="text-red-500 text-4xl font-bold tracking-tight sm:text-6xl">
          Fernanda
        </span>
      </div>
      <span className="text-red-500 text-4xl font-bold tracking-tight sm:text-6xl">
        I am a <span className="text-white">Full-stack Dev.</span>
      </span>
      <p className="mt-6 text-lg leading-8 text-gray-300">
        I like to build UI/UX experiences for humans. Currently, I'm focused on
        learning about tech and updated stack.
      </p>
      <div className="flex gap-3 justify-center pt-5">
        {icons.map((icon, index) => (
          <span key={index}>{icon}</span>
        ))}
      </div>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="#"
          className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <a href="#" className="text-sm font-semibold leading-6 text-gray-300">
            Interested to collaborate ? <span aria-hidden="true">→</span>
          </a>
        </a>
      </div>
    </div>
  );
}
