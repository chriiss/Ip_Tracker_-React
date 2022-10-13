import React, { useEffect } from "react"
import { Marker, Popup, useMap } from "react-leaflet"

const MarkerPos = ({position, icon}) => {
    const map = useMap();
    useEffect(() => {
        map.flyTo(position, 15, {
          animate: true,
        })
    }, [map, position])
    return(
        <>
            <Marker position={position} icon={icon}>
                <Popup>
                    {position}
                </Popup>
            </Marker>
        </>
    )
}

export default MarkerPos;