import { FC, memo } from "react";
import { SidebarButtonProps } from "../types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SidebarButton: FC<SidebarButtonProps> = memo(
  ({ isToggle, setIsToggle }) => {
    return (
      <button
        onClick={() => setIsToggle(!isToggle)}
        className={`fixed top-1/2 transform -translate-y-1/2 z-20 hover:dark:bg-gray800 hover:bg-gray100 bg-white dark:bg-gray900 dark:text-white text-gray900 pr-2 pl-1 py-5 rounded-br-2xl rounded-tr-2xl rounded-l-none shadow-lg focus:outline-none transition-all duration-300 ease-in-out
          ${isToggle ? "left-72" : "left-0"}
          sm:left-72`}
        aria-label="Toggle Sidebar"
      >
        {isToggle ? <FaChevronLeft size={16} /> : <FaChevronRight size={16} />}
      </button>
    );
  }
);

export default SidebarButton;
