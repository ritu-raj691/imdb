"use client";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const DarkModeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex items-center space-x-5 cursor-pointer hover:text-amber-400">
      {mounted && currentTheme === "dark" ? (
        <MdLightMode onClick={() => setTheme("light")} />
      ) : (
        <BsFillMoonFill onClick={() => setTheme("dark")} />
      )}
    </div>
  );
};

export default DarkModeSwitch;
