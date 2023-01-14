import { useState, useEffect } from 'react'

type Props = {}

export default function ButtonToggle({}: Props) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
  const [isMounted, setIsMounted] = useState(false);

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return null;
  }

  return (
    <button
      type="button"
      aria-label='button to change color theme'
      className={
        `p-2 rounded-full w-9
        ${theme === "light" 
          ? "text-agena-black hover:text-white hover:bg-agena-red" 
          : "text-white hover:text-white hover:bg-agena-UIblue"}`
      }
      onClick={handleClick}>
      {theme === "light" ? <i className="fa-solid fa-moon"></i>: <i className="fa-solid fa-sun"></i>}
    </button>
  );
}