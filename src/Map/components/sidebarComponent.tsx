import { useState, memo, FC } from "react";
import { SidebarComponentProps } from "../types/index";
import { useStateValue } from "../../context/globalContextProvider";
import Header from "../../common/header";
import Footer from "../../common/footer";

const SidebarComponent: FC<SidebarComponentProps> = memo(({ locations }) => {
  const { state, dispatch } = useStateValue();
  const { isLocation } = state;
  const [searchQuery, setSearchQuery] = useState("");

  // search functionality
  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="h-full bg-white dark:bg-gray900 shadow-lg w-72 flex justify-between flex-col">
      <Header />
      {/* search input  */}
      <div className="px-3 my-4">
        <input
          type="text"
          placeholder="Search locations..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full font-semibold text-sm dark:bg-gray800 bg-white dark:text-white text-gray800 px-3 py-2 border rounded-full focus:outline-none  focus:border-gray800"
        />
      </div>
      {/* scrollable list of location items */}
      <ul className="h-full px-2 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded">
        {filteredLocations.map((location) => (
          <li
            key={location.id}
            className={`${
              isLocation?.id === location.id
                ? "dark:text-white text-secondary dark:bg-gray800 bg-gray100"
                : "dark:text-gray400 text-gray800"
            } p-2 mb-4 cursor-pointer font-semibold text-sm  hover:dark:bg-gray800 hover:bg-gray100 hover:dark:text-white hover:text-secondary rounded`}
            onClick={() =>
              dispatch({
                type: "SET_LOC",
                isLocation: location,
              })
            }
          >
            {location.name}
          </li>
        ))}
        {filteredLocations.length === 0 && (
          <li className="p-2 mt-4 cursor-pointer font-semibold text-sm dark:text-white text-gray800 rounded">
            No locations found.
          </li>
        )}
      </ul>
      <Footer />
    </div>
  );
});

export default SidebarComponent;
