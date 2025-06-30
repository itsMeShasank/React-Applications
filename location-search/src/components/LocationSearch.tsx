import type {Place} from "../api/place.ts";
import {useState, Fragment} from "react";
import * as React from "react";
import {search} from "../api/search.ts";


interface LocationSearchProps {
    onPlaceClick: (place: Place) => void;
}

const LocationSearch = (props: LocationSearchProps)=> {
    const [term, setTerm] = useState("");
    const [places, setPlaces] = useState<Place[] | null>([]);
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        const result = await search(term);
        setPlaces(result);
    }
    const onClick = (place: Place): void => {
        props.onPlaceClick(place);
    }
    return (
        <>
          <form onSubmit={handleSubmit}>
              <label className="font-bold" htmlFor="term">Search</label>
              <input
                  type="text"
                  className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full"
                  id="term"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                  />
              <input className="border border-indigo-100 rounded-md w-20 h-12 font-bold" type="submit" value="Search" />
          </form>
            <h1 className="font-bold mt-6">Found Locations</h1>
            <div className="grid grid-cols-[1fr_40px] gap-2 mt-2 items-center">
                { places &&
                    places.map((place: Place) => {
                        return <Fragment key={place.id}>
                            <p className="text-sm">{place.name}</p>

                            <button
                                className="bg-blue-500 text-xs text-white font-bold py-1 px-1 rounded"
                                onClick={()=> onClick(place)}
                            >
                                Go
                            </button>
                            <div className="border-b w-full col-span-2"/>
                        </Fragment>
                    })
                }
            </div>
        </>
    )
}

export default LocationSearch