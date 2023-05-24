import "./App.css";
import { useSelector } from "react-redux";
// import { useState, useEffect } from "react";
// import FaRegMoon from "react-icons/fa"

function App() {
  

  const userList = useSelector((state) => state.users.value);
  return (
    <div className="w-full h-screen p-10 bg-neutral-200 border-red-800 flex flex-col justify-center items-center dark:bg-neutral-800 transition-all duration-500">
      <div className="flex flex-col justify-center items-center gap-3 p-12 rounded-xl border-2 border-neutral-600 hover:border-purple-600 transition-all duration-700">
        <input
          className="p-2 border-2 border-neutral-400 rounded-xl bg-transparent placeholder-neutral-500 focus:outline-none focus:border-purple-600 text-neutral-50 caret-purple-600 transition-all duration-500"
          type="text"
          placeholder="Name"
        ></input>

        <input
          className="p-2 border-2 border-neutral-400 rounded-xl bg-transparent placeholder-neutral-500 focus:outline-none focus:border-purple-600 text-neutral-50 caret-purple-600 transition-all duration-500"
          type="text"
          placeholder="Username"
        ></input>

        <button className="py-2 px-3 mt-6 rounded-xl bg-neutral-700 text-neutral-300 active:scale-110 active:bg-purple-600 transition-all duration-200">
          Add User
        </button>
      </div>

      <div className="p-4">
        {userList.map((user) => {
          return <h1>{user.name}</h1>;
        })}
      </div>
      
    </div>
  );
}

export default App;
