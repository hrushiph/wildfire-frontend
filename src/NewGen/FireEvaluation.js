import React from 'react';
import '../css/Progression.css';

const devUrl = '';
const prodUrl = 'https://wildfire-flask-backend.herokuapp.com';

class FireEvaluation extends React.Component{

    constructor(props) {
        super(props)
    }

    render(){        
        var url = window.location.href;

        return(
            <div style={{marginLeft:'15rem'}}>
                <div className="container-fluid custom-fluid">
                    <div className="filter-container">
                        <div className="country-filter-container select">
                            <p for="Select Region" style={{marginBottom: '5px',fontWeight: 'bold'}}>Select Metrics</p>
                            <select className="select-text" name="Country" id="regionSelected" style={{width: '100%'}}>
                                <option value="North California" >LSTM</option>
                                <option value="San Diego" selected>Comparision</option>
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



export default FireEvaluation;