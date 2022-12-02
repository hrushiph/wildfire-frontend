import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Progression.css';

const devUrl = '';
const prodUrl = 'https://wildfire-flask-backend.herokuapp.com';

class FireProgression extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          lat : "", // I would use this.props.id for a real world implementation
          imageURI : null,
          date : "",
          latlong: sessionStorage.getItem("latlong"),
          date : sessionStorage.getItem("date")
        }
    }

    detect(e) {
        console.log('detecting')
        fetch('http://127.0.0.1:5000/api/getProgression', {
            method: "POST",
            mode: "cors",
            headers: {
                'Access-Control-Allow-Origin': true
            },
            body: { lat : this.state.lat, date : this.state.date }
        },  { mode:'no-cors' } )   
        .then(response => response.json())
        .then(jsondata => console.log(jsondata))
    }

    render(){  
        return(
            <div style={{marginLeft:'15rem'}}>
                <div className="detection-container text-center">
                    <div className="input-img-holder brise-input">
                        <input
                                id={this.state.id}
                                type="input"
                                className="show-for-sr"
                                placeholder="Cordinates" 
                                value={this.state.latlong} />
                        <input
                                id={this.state.id}
                                type="input"
                                className="show-for-sr"
                                placeholder="Date - MM/DD/YYYY" 
                                value={this.state.date} />

                    </div>
                    <p
                        htmlFor={this.state.id}
                        className="button help-text">
                            Enter the co-ordinates to evaluate the progression
                    </p>
                    <div className="button-container">
                            <button
                                style={{marginTop: '7px', padding: '7px 30px'}}
                                className="btn btn-secondary btn-mat"
                                    onClick={this.detect.bind(this)}
                                >
                                    Evaluate Progression
                            </button>
                        </div>
                </div>
                <div className="output-container" >
                    <div className="progression-holder text-center">
                        <img src={require('../ImageProcessing/final_output_progression.gif')}></img>
                        <img src={require('../ImageProcessing/spread_pattern.png')}></img>
                    </div>
                </div>
            </div>
        );
    }
}



export default FireProgression;