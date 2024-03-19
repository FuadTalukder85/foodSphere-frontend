import { useEffect, useState } from "react";
import { CgDarkMode } from "react-icons/cg";
import { CiLight } from "react-icons/ci";

const Theme = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light-theme";
  });
  const toggleTheme = () => {
    let newTheme;
    if (theme === "dark-theme") {
      newTheme = "light-theme";
    } else {
      newTheme = "dark-theme";
    }
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <button onClick={() => toggleTheme()}>
      {theme === "light-theme" ? <CgDarkMode /> : <CiLight />}
    </button>
  );
};

export default Theme;
