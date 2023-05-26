import React, { useEffect, useRef, useState } from "react";
import { addUser } from "../Redux/features/Users";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "@phosphor-icons/react";

const AddUserModal = ({ toggle, modal, setModal }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  let modalRef = useRef();
  const userList = useSelector((state) => state.users.value);

  useEffect(() => {
    let handler = (e) => {
      if (!modalRef.current.contains(e.target)) {
        setModal(false);
        // console.log(modal)
        // console.log(modalRef.current);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  // useEffect(() => {
  //   console.log(name)
  //   console.log(username)
  // }, [name, username])

  const addUserHandler = () => {
    if (name || username === "") {
      setError("Both name and username must have a valid value");
      setTimeout(() => {
        setError("");
      }, "4000");
    } else {
      dispatch(
        addUser({
          id: userList[userList.length - 1].id + 1,
          name,
          username,
        })
      );
      console.log("KULLANICILAR: ", userList);
      setModal(false);
    }
  };

  return (
    // <div
    //   className={`${
    //     state === false ? "hidden scale-50" : "block scale-100"
    //   }fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-neutral-800 bg-opacity-75`}
    //   onClick={state}
    // >
    // <AnimatePresence>
    <motion.div
      className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-neutral-800 bg-opacity-75"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`${
          error &&
          "border-red-600 hover:border-red-600 transition-all duration-1000"
        } absolute w-auto flex flex-col justify-center items-center gap-3 p-12 rounded-xl bg-neutral-200 dark:bg-neutral-800 border-2 border-neutral-600 hover:border-purple-600 transition-all duration-700`}
        ref={modalRef}
      >
        <AnimatePresence>
          {error && (
            <motion.div
              className="fixed top-0 p-3 bg-red-900 text-neutral-200 rounded-xl text-center transition-all duration-500 select-none"
              initial={{ y: -60 }}
              animate={{ y: 20 }}
              exit={{ y: -3000 }}
              transition={{ duration: 0.1 }}
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        <button
          className="absolute top-3 right-3 p-1 bg-neutral-500 hover:bg-red-500 rounded-lg transition-all duration-200"
          onClick={toggle}
        >
          <X
            size={17}
            weight="bold"
            className="text-neutral-800 hover:text-red-900 transition-all duration-200sss"
          />
        </button>

        <h1 className="dark:text-neutral-200 mb-6 font-bold text-3xl">
          New User
        </h1>
        <input
          className="p-2 border-2 border-neutral-400 rounded-xl bg-transparent placeholder-neutral-500 focus:outline-none focus:border-purple-600 dark:text-neutral-50 caret-purple-600 transition-all duration-500"
          type="text"
          placeholder="Name"
          // value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <input
          className="p-2 border-2 border-neutral-400 rounded-xl bg-transparent placeholder-neutral-500 focus:outline-none focus:border-purple-600 dark:text-neutral-50 caret-purple-600 transition-all duration-500"
          type="text"
          placeholder="Username"
          // value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>

        <button
          className="py-2 px-3 mt-6 rounded-xl bg-neutral-700 text-neutral-300 active:scale-110 active:bg-purple-600 transition-all duration-200 select-none"
          onClick={addUserHandler}
        >
          Add User
        </button>
      </div>
    </motion.div>
    // </AnimatePresence>
  );
};

export default AddUserModal;
