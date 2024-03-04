import { useEffect } from "react";
import { useMap } from "react-leaflet";

function LocationMarker({ coordinates }) {
  const map = useMap();

  // Use useEffect to fly to the location when the coordinates change
  useEffect(() => {
    if (coordinates.lat !== 0 && coordinates.lon !== 0) {
      map.flyTo(coordinates, 12);
    }
  }, [coordinates, map]);

  // Return null because we don't need to render anything for this component
  return null;
}

export default LocationMarker;