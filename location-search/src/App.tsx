import LocationSearch from "./components/LocationSearch.tsx";
import Map from "./components/Map.tsx";
import type {Place} from "./api/place.ts";
import {useState} from "react";


function App() {

    const [place, setPlace] = useState<Place | null>(null);

    const onPlaceClick = (place: Place): void => {
        setPlace(place);
    }

  return (
      <div className="h-screen w-screen grid grid-cols-15">
       <div className="col-span-5 p-2">
           <LocationSearch onPlaceClick={onPlaceClick} />
       </div>
       <div className="col-span-10">
           <Map place={place} />
       </div>
      </div>
    )
}

export default App
