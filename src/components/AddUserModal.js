import React, { useEffect, useRef, useState } from "react";
import { addUser } from "../Redux/features/Users";
import { useDispatch } from "react-redux";
import { UserList } from "@phosphor-icons/react";

const AddUserModal = ({ toggle, modal,  setModal }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  let modalRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!modalRef.current.contains(e.target)){
        setModal(false);
        // console.log(modal)
        // console.log(modalRef.current);
      }
    };
    document.addEventListener("mousedown", handler);
    return() =>{
      document.removeEventListener("mousedown", handler);
    }
  });

  return (
    // <div
    //   className={`${
    //     state === false ? "hidden scale-50" : "block scale-100"
    //   }fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-neutral-800 bg-opacity-75`}
    //   onClick={state}
    // >
    <div
      className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-neutral-800 bg-opacity-75"
    >
      <div
        className="absolute w-auto flex flex-col justify-center items-center gap-3 p-12 rounded-xl bg-neutral-800 border-2 border-neutral-600 hover:border-purple-600 transition-all duration-700"
        ref={modalRef}
      >
        <input
          className="p-2 border-2 border-neutral-400 rounded-xl bg-transparent placeholder-neutral-500 focus:outline-none focus:border-purple-600 text-neutral-50 caret-purple-600 transition-all duration-500"
          type="text"
          placeholder="Name"
          // value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <input
          className="p-2 border-2 border-neutral-400 rounded-xl bg-transparent placeholder-neutral-500 focus:outline-none focus:border-purple-600 text-neutral-50 caret-purple-600 transition-all duration-500"
          type="text"
          placeholder="Username"
          // value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>

        <button
          className="py-2 px-3 mt-6 rounded-xl bg-neutral-700 text-neutral-300 active:scale-110 active:bg-purple-600 transition-all duration-200"
          onClick={() => {
            dispatch(
              addUser({
                id: UserList[UserList.length - 1].id + 1,
                name,
                username,
              })
            );
          }}
        >
          Add User
        </button>
      </div>
    </div>
  );
};

export default AddUserModal;
