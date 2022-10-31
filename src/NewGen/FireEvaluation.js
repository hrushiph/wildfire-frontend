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
                <div className="container-fluid">
                    <div className="filter-container">
                        <div className="country-filter-container select">
                            <p for="Select Region" style={{marginBottom: '5px',fontWeight: 'bold'}}>Select Metrics</p>
                            <select className="select-text" name="Country" id="regionSelected" style={{width: '100%'}}>
                                <option value="North California" >LSTM</option>
                                <option value="San Diego" selected>Comparision</option>
                            </select>
                        </div>
                    </div>
                    <div className="image-container">
                        {/* <img src={require('../ImageProcessing/eval.jpeg')}></img> */}
                    </div>
                </div>
            </div>
        );
    }
}



export default FireEvaluation;