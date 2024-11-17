import { Link } from "react-router-dom";
import { appPaths } from "../../../app";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between px-6 py-3.5 items-center w-full mx-auto sticky top-0 box-border">
      <Link to="/">
        <div className="flex flex-row items-center lg:w-[15%] justify-between w-[30%]">
          <img
            src={"/logo.png"}
            alt="logo"
            className="w-[150px] lg:w-[280px]"
          />
        </div>
      </Link>
      <Link to={appPaths.create}>
          <button className="rounded-lg p-1 lg:p-1.5 text-sm lg:text-base">
            Create Stream
          </button>
        </Link>
    </div>
  );
};

export default Navbar;
