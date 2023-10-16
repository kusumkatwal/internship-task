import './App.css';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import ApiData from './components/ApiData';

function App() {

    return (
    <div className="App">
      <Navigation/>
      <Banner/>
      <ApiData/>
      {/* <Service1/> */}
    </div>
  );
}

export default App;
