import L from 'leaflet'

// const PinIcon = L.divIcon({
//     iconUrl: 'https://api.iconify.design/material-symbols:location-on.svg',
//     shadowUrl: 'https://api.iconify.design/material-symbols:location-on.svg',
//     iconSize: [38, 95],
//     shadowSize: [50, 64],
//     iconAnchor: [22, 94],
//     shadowAnchor: [4, 62],
//     popupAnchor: [-3, -76]
// });


export interface PinDataInt {
    coords: [number, number]
    title: string
}

export class PinData implements PinDataInt {
    coords: [number, number];
    title: string;

    PinData(data: PinDataInt) {
        this.coords = data.coords
        this.title = data.title
    }

    // initPin(map: L.Map) {
    //     const marker = new L.Marker(this.coords, {icon: PinIcon})
    //     marker.addTo(map)
    // }
}