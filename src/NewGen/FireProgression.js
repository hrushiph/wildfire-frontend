import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Progression.css';

const devUrl = '';
const prodUrl = 'https://wildfire-flask-backend.herokuapp.com';

class FireProgression extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          id : "someUniqueId", // I would use this.props.id for a real world implementation
          imageURI : null
        }
    }

    detect(e) {
        console.log('detecting')
        // fetch('http://127.0.0.1:5000/api/getDetection', {
        //     method: "POST",
        //     headers: {
        //         'Access-Control-Allow-Origin': true
        //     },
        //     body: (window.URL || window.webkitURL).createObjectURL('../ImageProcessing/veg_firemap.jpeg')
        // })
        // // .then(res => print(res))
        // .then(resData => {
        //     console.log(resData)
        // })

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
                                placeholder="Cordinates" />
                        <input
                                id={this.state.id}
                                type="input"
                                className="show-for-sr"
                                placeholder="Date MM/DD/YYYY" />

                    </div>
                    <p
                        htmlFor={this.state.id}
                        className="button help-text">
                            Enter the co-ordinates to detect
                    </p>
                    <div className="button-container">
                            <button
                                style={{marginTop: '7px', padding: '7px 30px'}}
                                className="btn btn-secondary btn-mat"
                                    onClick={this.detect.bind(this)}
                                >
                                Detect
                            </button>
                        </div>
                </div>
                <div className="output-container" >
                    <div className="detection-holder">
                        <img src={require('../images/detect.jpg')}></img>
                    </div>
                    <div className="progression-holder">
                        <img src={require('../ImageProcessing/final_output.gif')}></img>
                    </div>
                </div>
            </div>
        );
    }
}



export default FireProgression;