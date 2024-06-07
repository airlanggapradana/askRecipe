"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <button
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="dark:text-white"
      >
        {theme === "light" ? <Moon size={26} /> : <Sun size={26} />}
      </button>
    </>
  );
};

export default ThemeToggle;
