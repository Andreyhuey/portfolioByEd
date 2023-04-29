import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export default function Nav() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const HandleThemeSwitch = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  // Render null until the theme loads to avoid mismatch errors
  if (!mounted) return null;

  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-xl font-burtons cursor-pointer">CultureX</h1>
      <ul className="flex items-center">
        <li>
          <button onClick={HandleThemeSwitch} className="text-2xl">
            {currentTheme === "dark" ? (
              <BsFillSunFill />
            ) : (
              <BsFillMoonStarsFill />
            )}
          </button>
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 cursor-pointer"
            href="https://shorturl.at/gnI37"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
