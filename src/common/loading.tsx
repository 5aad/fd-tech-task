// src/components/Loading.tsx
import { FC } from "react";
import { FaSpinner } from "react-icons/fa";

const Loading: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen dark:bg-gray800 bg-white">
      <FaSpinner className="w-16 h-16 mb-4 dark:text-white text-secondary animate-spin" />
      <div className="flex items-center">
        <span className="text-xl font-semibold dark:text-white text-gray800">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loading;
