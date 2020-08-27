import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Globe from 'react-globe.gl';

const World = () => {
  const [countries, setCountries] = useState({ features: []});

  useEffect(() => {
    // load data
    fetch('../datasets/ne_110m_admin_0_countries.geojson').then(res => res.json()).then(setCountries);
  }, []);

  return <Globe
    globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"

    hexPolygonsData={countries.features}
    hexPolygonResolution={3}
    hexPolygonMargin={0.3}
    hexPolygonColor={() => `#${Math.round(Math.random() * Math.pow(2, 24)).toString(16).padStart(6, '0')}`}
    hexPolygonLabel={({ properties: d }) => `
      <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
      Population: <i>${d.POP_EST}</i>
    `}
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
