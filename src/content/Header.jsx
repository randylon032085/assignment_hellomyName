// Created by Randylon Torda
// Date January 14, 2025
//Lab -1

import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { red } from "@mui/material/colors";

function Header() {
  const { username, updateField } = useUserContext();
  const [range, setRange] = useState(2.5);
  const [COLOR, setCOLOR] = useState("black");
  const [toggle, setToggle] = useState(true);

  //#${Math.floor(Math.random() * 16777215).toString(16)}

  function handleClick() {
    setToggle(!toggle);
    if (toggle === true) {
      setCOLOR(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    } else {
      setCOLOR("black");
    }
    console.log(toggle);
  }

  return (
    <form className="flex flex-col items-center bg-violet-300 max-w-md mx-auto gap-2 p-6 mt-6 rounded-md shadow-lg">
      <input
        value={username}
        onChange={updateField}
        name="username"
        type="text"
        placeholder="Enter username"
        className="text-center"
      />

      <div className="o">
        <span className="" style={{ opacity: range, color: COLOR }}>
          Hello my name {username}
        </span>
      </div>

      <button
        type="button"
        onClick={handleClick}
        className="bg-red-400 rounded-md w-[100px]"
      >
        click
      </button>

      <input
        type="range"
        min={0}
        max={5}
        step={0.001}
        value={range}
        onChange={(e) => setRange(e.target.value)}
      />
      <span className="text-red-500">{range}</span>
    </form>
  );
}

export default Header;
