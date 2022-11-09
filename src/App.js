import React from 'react';
import './css/App.css';

import {BrowserRouter, Route} from 'react-router-dom';

import DataCollection from './DataCollection';
import Preprocessing from './Preprocessing';
import DataAnalysis from './DataAnalysis';
import Detection from './Detection';
import Risk from './Risk';
import Progression from './Progression';
import ModelEvaluation from './ModelEvaluation';
import FireProgressionGenV from './FireProgressionGenV';
import FireSatelliteExtraction from './NewGen/FireSatelliteExtraction';
import FireDetection from './NewGen/FireDection';
import FireEvaluation from './NewGen/FireEvaluation';
import FireProgression from './NewGen/FireProgression';
import FireAnalytics from './NewGen/FireAnalytics';
// import Flask from'./Flask-example';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={DataCollection}></Route>
      <Route path="/preprocessing" component={Preprocessing}></Route>
      <Route path="/data-analysis" component={DataAnalysis}></Route>
      <Route path="/detection" component={Detection}></Route>
      <Route path="/risk" component={Risk}></Route>
      <Route path="/progression" component={Progression}></Route>
      <Route path="/model-evaluation" component={ModelEvaluation}></Route>
      <Route path="/new-version" component={FireProgressionGenV}></Route>
      <Route path="/new-version/extraction" component={FireSatelliteExtraction}></Route>
      <Route path="/new-version/detection" component={FireDetection}></Route>
      <Route path="/new-version/evaluation" component={FireEvaluation}></Route>
      <Route path="/new-version/progression" component={FireProgression}></Route>
      <Route path="/new-version/analytics" component={FireAnalytics}></Route>
      {/* <Route path='/flask' component={Flask}></Route> */}
    </BrowserRouter>
  );
}

export default App;
