import type {Place} from "../api/place.ts";
import 'leaflet/dist/leaflet.css';
import {type Map as LeafletMap} from 'leaflet';
import {MapContainer, TileLayer, Marker} from "react-leaflet";
import {useEffect, useRef} from "react";


interface MapProps {
    place: Place | null;
}

const Map = ({place}: MapProps) => {
    const mapRef = useRef<LeafletMap | null>(null);
    useEffect(() => {
        if (mapRef.current && place) {
            mapRef.current.flyTo([place.latitude, place.longitude]);
        }
    }, [place]);
    return (
        <MapContainer
            ref={mapRef}
            center={[40.7, -74]}
            zoom={12}
            scrollWheelZoom
            className="h-full w-full"
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            {place && <Marker position={[place?.latitude, place?.longitude]}/>}
        </MapContainer>
    )
}

export default Map;
