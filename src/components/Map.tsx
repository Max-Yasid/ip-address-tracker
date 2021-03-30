import './Map.css';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import * as types from './../types/addressData';

interface IMapProps{
    addressData: types.addressData
}

const Map: React.FC<IMapProps> = (props: IMapProps) => {
    const longitude = props.addressData.location?.lng || 0;
    const latitude = props.addressData.location?.lat || 0;
    return (
        <div>
            <MapContainer className="mapContainer" center={[latitude, longitude]} zoom={13} scrollWheelZoom={false}>
                
                <ChangeView center={[latitude, longitude]} zoom={13} /> 
                <TileLayer
                    attribution=''
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[latitude, longitude]}>
                
                </Marker>
            </MapContainer>
        </div>
    );
}


function ChangeView(props: any) {
    const map = useMap();
    map.setView(props.center, props.zoom);
    return null;
}

export default Map;