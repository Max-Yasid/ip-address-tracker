import Header from './header';
import Map from './../containers/Map';
import './App.css';
import * as dataAddressTypes from './../types/addressData';

interface IProps{
  actions: { setAddressData: any };
}

function App(props: IProps) {
  fetch("https://geo.ipify.org/api/v1?apiKey=at_PNPe115qT1R3ySoEc9ekW6ioP0Akn&ipAddress=")
    .then((res: any) => res.json())
    .then((addressData: dataAddressTypes.addressData) => props.actions.setAddressData(addressData));
    
  return (
    <div className="App">
      <Header />
      <Map />
    </div>
  );
}

export default App;