import React, { Suspense, lazy, useState } from "react";
import SidebarComponent from "./components/sidebarComponent";
import { Location } from "./types/index";
import locationsData from "./data/locations.json";
import SidebarButton from "./components/sidebarButton";
import { useStateValue } from "../context/globalContextProvider";
import FlyToComponent from "./components/flyToComponent";
import { delayForDemo } from "../utils/delayForDemo";
import Loading from "../common/loading";
const MapComponent = lazy(() =>
  delayForDemo(import("./components/mapComponent"))
);

const Map: React.FC = () => {
  const { state } = useStateValue();
  const { isLocation } = state;
  const [isToggle, setIsToggle] = useState<boolean>(false);

  // Using a static JSON file eliminates the need for the fetch API,
  // but I've included an example below for fetching data from an API.
  // using json-server library for creating mock API of my JSON data

  // const [locations, setLocations] = useState<Location[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);
  // useEffect(() => {
  //   const fetchLocations = async () => {
  //     try {
  //       const response = await fetch('http://localhost:4000/locations');
  //       if (!response.ok) {
  //         throw new Error(`Error: ${response.status} ${response.statusText}`);
  //       }
  //       const data: Location[] = await response.json();
  //       setLocations(data);
  //     } catch (err: any) {
  //       setError(err.message || 'Something went wrong.');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchLocations();
  // }, []);

  return (
    <div className="relative h-dvh w-screen">
      <Suspense fallback={<Loading />}>
        <MapComponent locations={locationsData as Location[]}>
          <FlyToComponent isLocation={isLocation} setIsToggle={setIsToggle} />
        </MapComponent>
      </Suspense>
      <div
        className={`fixed top-0 bottom-0 left-0 z-20 w-72 transform transition-transform duration-300 ease-in-out
        ${
          isToggle
            ? "translate-x-0 sm:-translate-x-72"
            : "-translate-x-72 sm:translate-x-0"
        }
        `}
      >
        <SidebarComponent locations={locationsData as Location[]} />
      </div>
      <SidebarButton isToggle={isToggle} setIsToggle={setIsToggle} />
    </div>
  );
};

export default Map;
