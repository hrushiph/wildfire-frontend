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
          date : sessionStorage.getItem("date"),
          detLat : 36.01684931506849,
          detLong: -121.99771689497717,
          resultSpread: [39,54,70,99,100,103,117,119,120,134,135]
        }

        this.getCord = this.getCord.bind(this);
        this.getResult = this.getResult.bind(this);
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

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    getCord(e) {
        const x = (e.pageX - e.currentTarget.offsetLeft) - 257; 
        const y = (e.pageY - e.currentTarget.offsetTop)-337;
        console.log("Left? : " + x + " ; Top? : " + y + ".");
        const lat = 36.01 + (x*(1/438))
        const long = -122 + (y*(1/438))
        console.log(lat + ',' + long)
        this.setState({
            detLat : lat,
            detLong: long,
            resultSpread: [39,54,70,99,100,103,117,119,120,134,135]
        })
        const classList = ["left", "right", "top", "bottom", "left-top", "right-top", "left-bottom","right-bottom"];

        // const random = Math.floor(Math.random() * classList.length);
        fetch('http://127.0.0.1:5000/api/getPointEvaluation', {
            method: "POST",
            mode: "cors",
            headers: {
                'Access-Control-Allow-Origin': true
            },
            body: { lat : lat, long : long }
        },  { mode:'no-cors' } )   
        .then(response => response.json())
        .then(jsondata => {
            console.log(jsondata.result)
            document.getElementsByClassName('pointer')[0].classList = 'pointer ' + jsondata.result;
            setTimeout(() => {
                document.getElementsByClassName('pointer')[0].classList = 'pointer';
            }, 3000);
        })
    }

    getResult(e) {
        const resultSpread = [39,54,70,99,100,103,117,119,120,134,135];
        resultSpread.reverse().forEach(function(element, index) {
            setTimeout(() => {
                if(document.querySelector('[data-key="' + element + '"]')) {
                    document.querySelector('[data-key="' + element + '"]').classList.add('checked');
                }
            }, 1000+(index*100));
        });
        resultSpread.forEach(function(element, index) {
            setTimeout(() => {
                if(document.querySelector('[data-key="' + element + '"]')) {
                    document.querySelector('[data-key="' + element + '"]').classList.remove('checked');
                }
            }, 1800+(index*100));
        });
        setTimeout(() => {
            if(document.getElementsByClassName('parent-grid-advanced')[0]) {
                document.getElementsByClassName('parent-grid-advanced')[0].click();
            }
        }, 5000);
    }


    getResultUpdate(e) {
        const resultSpread = [39,54,70,99,100,103,117,119,120,134,135];
        resultSpread.reverse().forEach(function(element, index) {
            setTimeout(() => {
                if(document.querySelector('[data-key-update="' + element + '"]')) {
                    document.querySelector('[data-key-update="' + element + '"]').classList.add('checked');
                }
            }, 1000+(index*100));
        });
        resultSpread.forEach(function(element, index) {
            setTimeout(() => {
                if(document.querySelector('[data-key-update="' + element + '"]')) {
                    document.querySelector('[data-key-update="' + element + '"]').classList.remove('checked');
                }
            }, 1800+(index*100));
        });
        setTimeout(() => {
            if(document.getElementsByClassName('parent-grid-advanced-update')) {
                document.getElementsByClassName('parent-grid-advanced-update')[0].click();
            }
        }, 5000);
    }

    render(){  
        const getDepthSpread = (event, key) => {
            const resultSpread = [39,54,70,99,100,103,117,119,120,134,135];
            console.log(resultSpread.includes(key))
        };
        setTimeout(() => {
            if(document.getElementsByClassName('parent-grid-advanced')[0]) {
                document.getElementsByClassName('parent-grid-advanced')[0].click();
                document.getElementsByClassName('parent-grid-advanced-update')[0].click();
            }
        }, 3000);
        return(
            <div style={{marginLeft:'15rem'}}>
                <div className="detection-container text-center">
                    <div className="input-img-holder brise-input">
                        <input
                                id={this.state.id}
                                type="input"
                                className="show-for-sr"
                                placeholder="Cordinates" 
                                defaultValue={this.state.latlong} />
                        <input
                                id={this.state.id}
                                type="input"
                                className="show-for-sr"
                                placeholder="Date - MM/DD/YYYY" 
                                defaultValue={this.state.date} />

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
                    <div className="cordinate-details text-center">
                        <span>Santa Cruz - Area - <b>15.83 Square Miles</b>, </span>
                        <span>Fire - <b>CZU - Fire</b>, </span>
                        <span>Event Duration - <b>1Month</b>, </span>
                        <span>Acres Impacted - <b>86,509 Acres</b></span>
                    </div>
                </div>
                <div className="output-container" >
                    <div className="progression-holder text-center">
                        <img src={require('../ImageProcessing/final_output_progression.gif')}></img>
                        <div className="parent-grid" onClick={this.getCord.bind(this)}>
                            {Array.from({ length: 256 }, (_, i) => <div className="mini-grid" key={i} onClick={event => getDepthSpread(event, i)}></div>)}
                        </div>
                        <img src={require('../ImageProcessing/spread_pattern.png')} style={{visibility: 'hidden'}}></img>
                        <div className="deep-parent-grid left-bottom">
                            {Array.from({ length: 9 }, (_, i) => <div className="deep-mini-grid" key={i} onClick={event => getDepthSpread(event, i)}></div>)}
                        </div>
                        <div className="detection-cordinates">
                            <span>Latitude - <b>{this.state.detLat}</b>, </span>
                            <span>Longitude - <b>{this.state.detLong}</b></span>
                        </div>
                        <div className="detection-area">
                            <span>Area - 0.078(Per Square) * 9 = 0.702 Square Miles</span>
                        </div>
                        <div className="pointer">
                        </div>
                    </div>
                </div>
                <div className="advanced-result">
                    <img src={require('../images/Fireshape_Plain.png')}></img>
                    <div className="parent-grid-advanced" onClick={this.getResult.bind(this)}>
                        {/* {Array.from({ length: 256 }, (_, i) => <div className={`mini-grid-advanced ${this.state.resultSpread.includes(i) ? 'checked' : ''}`} key={i}></div>)} */}
                        {Array.from({ length: 256 }, (_, i) => <div className={`mini-grid-advanced`} key={i} data-key={i}></div>)}
                    </div>
                </div>
                <h5 className="text-center">FIRE PROGRESSION</h5>
                <div className="advanced-result-update">
                    <img src={require('../images/FireShape.jpeg')}></img>
                    <div className="parent-grid-advanced-update" onClick={this.getResultUpdate.bind(this)}>
                        {/* {Array.from({ length: 256 }, (_, i) => <div className={`mini-grid-advanced ${this.state.resultSpread.includes(i) ? 'checked' : ''}`} key={i}></div>)} */}
                        {Array.from({ length: 256 }, (_, i) => <div className={`mini-grid-advanced`} key={i} data-key-update={i}></div>)}
                    </div>
                </div>
            </div>
        );
    }
}



export default FireProgression;