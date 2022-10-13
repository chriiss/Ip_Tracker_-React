import { MapContainer, TileLayer, ZoomControl, ScaleControl } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import Styles from "../../styles/App.module.css";
import L from 'leaflet';
import MarkerPos from "./markerPos/MarkerPos";

const Maps = ({latitude, longitude}) => {
    const position = [latitude, longitude];
    const icon = L.icon({
        "iconUrl": require("../../assets/icon-location.png"),
        "iconSize": [34,38]
    });

    return(
        <>
            <MapContainer center={position} zoomControl={false} zoom={7} className={Styles.map} scrollWheelZoom={true}>
                <TileLayer
                attribution='© OpenStreetMap contributors'
                url="//mt.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                />
                <MarkerPos position={position} icon={icon}/>
                <ZoomControl position="bottomright" />
                <ScaleControl position="bottomleft" />
            </MapContainer>
        </>
    )
}

export default Maps;