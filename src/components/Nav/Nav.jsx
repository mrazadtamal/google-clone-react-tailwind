import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ darkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 ">
      <div className="flex justify-between items-center space-x-5 w-screen ">
        <Link to="/">
          <p className="text-2xl flex items-center bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-50 dark:text-gray-900">
            GOOGLE
            <img
              className="w-8 p-1 mx-3 text-green-900`"
              src="https://res.cloudinary.com/abidazad/image/upload/v1638116084/search_lcstsl.png"
              alt=""
            />
          </p>
        </Link>
        <button
          type="button"
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg"
        >
          {darkTheme ? "Logo Light" : "logo Dark"}
        </button>
      </div>
    </div>
  );
};

export default Nav;
