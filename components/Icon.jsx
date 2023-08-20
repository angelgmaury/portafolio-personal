"use client";
import { IconContext } from "react-icons";

export const Icon = ({ iconName }) => {
  return (
    <IconContext.Provider value={{ color: "" }}>
      <div className="text-zinc-300 md:hover:text-zinc-50">{iconName}</div>
    </IconContext.Provider>
  );
};
