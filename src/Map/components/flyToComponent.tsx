import { FC, memo, useEffect } from "react";
import { useMap } from "react-leaflet";
import { FlyToComponentProps } from "../types";

// this component is utilizing map hooks. When the user clicks on the location,
// it will take them to that location and show a popup with details.
const FlyToComponent: FC<FlyToComponentProps> = memo(
  ({ isLocation, setIsToggle }) => {
    const map = useMap();
    useEffect(() => {
      if (isLocation && isLocation.id !== 0 && isLocation.coordinates) {
        map.flyTo(isLocation.coordinates, 16, {
          duration: 2,
        });
        map.openPopup(
          `<div class="dark:text-white text-gray800">
            <strong class="text-secondary text-lg">${isLocation.name}</strong><br />
            ${isLocation.description}
          </div>`,
          isLocation.coordinates,
          {
            offset: [8, -33],
            className: "custom-popup",
          }
        );
        if (window.innerWidth < 640) {
          setIsToggle(false);
        }
      }
    }, [isLocation, map]);
    return null;
  }
);

export default FlyToComponent;
