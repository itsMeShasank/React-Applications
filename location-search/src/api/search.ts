import type {Place} from "./place.ts";

interface SearchResponse {
    features: {
        geometry: {
            coordinates: number[],
        },
        properties: {
            place_id: number,
            display_name: string,
        }
    }[];
}

export const search = async (term: string) => {

    const result = await fetch (
        `https://nominatim.openstreetmap.org/search?q=${term}&format=geojson&addressdetails=1&layer=address&limit=5`
    );
    const data = await result.json() as SearchResponse;
    const places: Place[] = data.features.map((feature) => {
        return {
            id : feature.properties.place_id,
            name: feature.properties.display_name,
            longitude: feature.geometry.coordinates[0],
            latitude: feature.geometry.coordinates[1],
        }
    });
    console.log("search", places);
    return places;
}