import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Progression.css';

const devUrl = '';
const prodUrl = 'https://wildfire-flask-backend.herokuapp.com';

class FireAnalytics extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          id : "someUniqueId", // I would use this.props.id for a real world implementation
          imageURI : null
        }
    }

    render(){        
        var url = window.location.href;

        return(
            <div style={{marginLeft:'15rem'}}>
                <div className="container-fluid custom-fluid">
                    <div className="filter-container">
                        <div className="country-filter-container select">
                            <p for="Select Region" style={{marginBottom: '5px',fontWeight: 'bold'}}>Select Model</p>
                            <select className="select-text" name="Country" id="regionSelected" style={{width: '100%'}}>
                                <option value="North California" >LSTM</option>
                                <option value="San Diego" selected>YOLO</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="container-fluid image-container">
                    <h5>Model Performance</h5>
                    <img src={require('../ImageProcessing/eval.png')}></img>
                </div>
            </div>
        );
    }
}



export default FireAnalytics;