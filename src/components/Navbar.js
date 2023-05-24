import React, { useEffect, useState } from 'react'
import { Moon } from "@phosphor-icons/react";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");

  // useEffect(() => {
  //   if(window.matchMedia('(prefers-color-scheme: dark)').matches){
  //     setTheme('dark');
  //   } else {
  //     setTheme('light');
  //   }
  // }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className='fixed w-full p-4 flex top-0 justify-between items-center bg-neutral-300 dark:bg-neutral-900 drop-shadow-sm transition-all duration-500'>
      <div className='dark:text-neutral-200 font-black text-lg select-none'>User Editor</div>
      <div className="p-3 bg-neutral-200 dark:bg-neutral-700 rounded-2xl">
        <Moon
          size={32}
          weight="bold"
          className="text-neutral-800 dark:text-neutral-200"
          onClick={handleThemeSwitch}
        />
      </div>
    </div>
  )
}

export default Navbar