import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div
        id="sidebar"
        className="w-60 bg-slate-300 h-[100vh] p-2 flex flex-col justify-center  border border-r-slate-400"
      >
        <h1 className="px-4 py-2 bg-green-500 text-white rounded-md text-center my-4">
          Contact Management
        </h1>

        <nav className="px-4 font-sans text-xl">
          <ul>
            <li>
              <Link to={`/contacts`}>Contacts</Link>
            </li>
            <li>
              <Link to={`/chartsandmaps`}>Charts and Maps</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div
        id="detail"
        className="w-full h-full flex justify-center items-center"
      >
        <Outlet />
      </div>
    </>
  );
}

export default App;
