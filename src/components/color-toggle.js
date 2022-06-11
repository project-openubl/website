import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Switch } from "@headlessui/react";
import { Moon, Sun } from "react-feather";

export const ColorModeToggle = () => {
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (prefersDark) => {
      if (localStorage.theme === undefined) {
        setIsDark(prefersDark);
      }
    }
  );

  const [isDarkMessage, setDarkMessage] = useState(
    "Light Mode enabled - Switch to Dark Mode"
  );

  const userSelectedTheme = () => {
    if (typeof window !== "undefined" && window) {
      if (localStorage.theme === "dark") {
        return true;
      }
      if (localStorage.theme === "light") {
        return false;
      }
      if (localStorage.theme === undefined) {
        return systemPrefersDark;
      }
    }
  };

  const [isDark, setIsDark] = useState(userSelectedTheme);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      setDarkMessage("Dark Mode enabled - Switch to Light Mode");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setDarkMessage("Light Mode enabled - Switch to Dark Mode");
    }
  }, [isDark]);

  return (
    <Switch
      aria-label={isDarkMessage}
      title={isDarkMessage}
      className="rounded hover:bg-base-900 dark:hover:bg-primary-400 hover:border-base-500 focus:outline-none focus:ring-2 focus:ring-base-400 dark:focus:ring-primary-700"
      onChange={() => {
        if (isDark) {
          localStorage.theme = "light";
        } else {
          localStorage.theme = "dark";
        }
        return setIsDark(!isDark);
      }}
    >
      <span className="sr-only">{isDarkMessage}</span>
      {isDark ? (
        <Moon className="h-7 w-7 p-1 dark:text-primary-700 text-base-400 bg-gray-800 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" />
      ) : (
        <Sun className="h-7 w-7 p-1 text-base-400 dark:text-primary-700 bg-gray-200 rounded-full text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" />
      )}
    </Switch>
  );
};
