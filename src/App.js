import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import AddUserModal from "./components/AddUserModal";
// import FaRegMoon from "react-icons/fa"

function App() {
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(!modal)
  }
  const modalOpen = () => {
    setModal(true)
  }

  const userList = useSelector((state) => state.users.value);

  return (
    <div className="w-full h-screen p-10 bg-neutral-200 flex flex-col justify-center items-center dark:bg-neutral-800 transition-all duration-500">
      <button
        className="py-2 px-3 mt-6 rounded-xl bg-neutral-700 text-neutral-300 hover:scale-105 hover:bg-purple-600 transition-all duration-500"
        onClick={modalHandler}
      >
        Add User
      </button>

      {modal && <AddUserModal modal={modal} toggle={modalHandler} setModal={setModal} />}
      {/* <div className='text-white m-10' >MODAL</div> */}
      <div className="p-4 mt-10 dark:text-neutral-200">
        {userList.map((user) => {
          return <h1>{user.name}</h1>;
        })}
      </div>
    </div>
  );
}

export default App;
