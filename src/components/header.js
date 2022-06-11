import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { GitHub } from "react-feather";
import { ColorModeToggle } from "./color-toggle";
import { Search } from "./search";

export const Header = () => {
  const [menuState, setMenuState] = useState(false);

  const navigation = [
    { title: "Docs", path: "/docs" },
    { title: "API Reference", path: "/apis" },
    { title: "Blog", path: "/blog" },
    { title: "Training", path: "https://katacoda.com/openubl" },
    { title: "Community", path: "/community" },
  ];

  return (
    <>
      <nav className="bg-white border-b">
        <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto">
          <div className="flex-none lg:flex-initial">
            <Link to="/">
              <StaticImage alt="Logo" src="../images/icon.png" height={50} />
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-between">
            <div
              className={`bg-white absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${
                menuState ? "" : "hidden"
              }`}
            >
              <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
                {navigation.map((item, idx) => (
                  <li key={idx} className="text-gray-600 hover:text-gray-900">
                    <a href={item.path}>{item.title}</a>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-5 border-t lg:hidden">
                <ColorModeToggle />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
              <Search />
              <div className="flex flex-row space-x-4">
                <a href="https://github.com/project-openubl/">
                  <GitHub className="h-7 w-7 p-1 text-base-400 dark:text-primary-700 bg-gray-200 rounded-full text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" />
                </a>
                <ColorModeToggle />
              </div>
              <button
                className="outline-none text-gray-400 block lg:hidden"
                onClick={() => setMenuState(!menuState)}
              >
                {menuState ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
