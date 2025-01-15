import { NavLink } from "react-router-dom";

const Notfound = () => {
  return (
    <>
      <div className="flex my-10 justify-center items-center">
        <div className="flex flex-col text-center">
          <h1 className="text-[150px] font-bold">404 page</h1>
          <NavLink
            className={"bg-[#FC8934] text-white p-2 mt-4 rounded"}
            to={"/"}>
            Retrune to Home Page
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Notfound;
