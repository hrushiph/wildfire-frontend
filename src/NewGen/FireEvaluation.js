import React from 'react';
import '../css/Progression.css';

const devUrl = '';
const prodUrl = 'https://wildfire-flask-backend.herokuapp.com';

class FireEvaluation extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          id : "someUniqueId", // I would use this.props.id for a real world implementation
          imageURI : null,
          targetValue : "ED"
        }
    }

    handleChange(e) {
        console.log(e.target.value)
        this.setState({
            targetValue : e.target.value
        })
    }
    render(){        
        var url = window.location.href;

        return(
            <div style={{marginLeft:'15rem'}}>
                <div className="container-fluid custom-fluid">
                    <div className="filter-container">
                        <div className="country-filter-container select">
                            <p for="Select Region" style={{marginBottom: '5px',fontWeight: 'bold'}}>Select Model</p>
                            <select className="select-text" name="Country" id="regionSelected" style={{width: '100%'}} onChange={this.handleChange.bind(this)}>
                                <option value="ED" selected>Efficient Det</option>
                                <option value="YOLO">YOLO</option>
                                <option value="value">Qlearning</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="container-fluid image-container">
                    <div className="ed-container analytics-image-container" style={{display : `${this.state.targetValue=="ED" ? 'block' : 'none' }`}}>
                        <h5>Learning Rate</h5>
                        <img src={require('../ImageProcessing/DetectionAnalytics/EfficientDet- Learning Rate.png')}></img>
                        <h5>Loss Graphs</h5>
                        <img src={require('../ImageProcessing/DetectionAnalytics/EfficientDet-Loss Graphs 1.png')}></img>
                        <h5>Loss Graphs</h5>
                        <img src={require('../ImageProcessing/DetectionAnalytics/EfficientDet- Loss Graphs 2.png')}></img>
                    </div>
                    <div className="yolo-container analytics-image-container" style={{display : `${this.state.targetValue=="YOLO" ? 'block' : 'none' }`}}>
                        <h5>YOLO - Loss Stats</h5>
                        <img src={require('../ImageProcessing/DetectionAnalytics/yolo_chart.png')}></img>
                    </div>
                    <div className="yolo-container analytics-image-container" style={{display : `${this.state.targetValue=="value" ? 'block' : 'none' }`}}>
                        <h5>Iterations - Gain</h5>
                        <img src={require('../ImageProcessing/DetectionAnalytics/it-gain.png')}></img>
                        <h5>Value By Value - ROC</h5>
                        <img src={require('../ImageProcessing/DetectionAnalytics/ROC-Qlearning.png')}></img>
                        <h5>Metrics</h5>
                        <img src={require('../ImageProcessing/DetectionAnalytics/Qmetrics.png')}></img>
                    </div>
                </div>
            </div>
        );
    }
}



export default FireEvaluation;