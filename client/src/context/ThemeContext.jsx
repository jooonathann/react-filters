import React, { useEffect, useState } from "react";

const { Provider, Consumer } = React.createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(window.localStorage.getItem("theme"));

  useEffect(() => {
    let el = document.querySelector(":root");

    if (theme === "dark") {
      el.classList.add("theme-dark");
    } else el.classList.remove("theme-dark");
  });

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
    } else {
      window.localStorage.setItem("theme", "light");
    }
    setTheme(window.localStorage.getItem("theme"));
  };

  return (
    <Provider value={{ theme: theme, toggle: toggleTheme }}>
      {children}
    </Provider>
  );
};

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
