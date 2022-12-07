import React from 'react';
import 'leaflet/dist/leaflet.css';
import MyNavbar from './Components/MyNavbar';
import './css/Progression.css';
import MiniNavigation from './MiniNavigation';
import FireSatelliteExtraction from './NewGen/FireSatelliteExtraction';

const devUrl = '';
const prodUrl = 'https://wildfire-ml-flask.herokuapp.com';

class FireProgressionGenV extends React.Component{

    constructor(props){
        super(props);
        
        // this.state = {
        //     currentCounty: 'San Diego',
        //     lat: props.lat,
        //     lon: props.lon,
        // }

    }

    componentDidMount(){

    }

    render(){
        return(
            <div className="wildfire-main-container">
                <MyNavbar/>
                <div className="wildfire-navigation-container" style={{marginLeft:'15rem'}}>
                    <div className="main-container">
                        <MiniNavigation></MiniNavigation>
                    </div>
                </div>
            </div>
        );
    }
}

export default FireProgressionGenV;
