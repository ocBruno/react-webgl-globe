import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Globe from 'react-globe.gl';
import axios from "axios"

const World = () => {
  const [places, setPlaces] = useState([]);
  console.log(places)
  useEffect(() => {
    // load data
      fetch('../datasets/ne_110m_populated_places_simple.geojson').then(res => res.json())
      .then(({ features }) => setPlaces(features));
  }, []);
  return <Globe
    globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
    labelsData={places}
    labelLat={d => d.properties.latitude}
    labelLng={d => d.properties.longitude}
    labelText={d => d.properties.name}
    labelSize={d => Math.sqrt(d.properties.pop_max) * 4e-4}
    labelDotRadius={d => Math.sqrt(d.properties.pop_max) * 4e-4}
    labelColor={() => 'rgba(255, 165, 0, 0.75)'}
    labelResolution={2}
  />;
};

function App() {

  return (
    <div className="App">
     <World />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
