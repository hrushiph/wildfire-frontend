import React from 'react';
import '../css/Progression.css';
import data2022 from '../data/Fire_Inactive_2022.json';
import data2021 from '../data/Fire_Inactive_2021.json';
import data2020 from '../data/Fire_Inactive_2020.json';
import data2019 from '../data/Fire_Inactive_2019.json';
import data2018 from '../data/Fire_Inactive_2018.json';
import CountUp from 'react-countup';

const devUrl = '';
const prodUrl = 'https://wildfire-flask-backend.herokuapp.com';

class FireAnalytics extends React.Component{
    constructor(props){
        super(props);
        let acresBurned = 0
        for(var i=0; i < data2022.length; i++){
            acresBurned += data2022[i].AcresBurned
        }
        this.state = {
          id : "someUniqueId", // I would use this.props.id for a real world implementation
          imageURI : null,
          targetValue : '2022',
          targetActiveData : data2022,
          targetHistoricalData : [],
          acresBurned : acresBurned
        }

        this.onGetVegetation = this.onGetVegetation.bind(this);
    }

    onGetVegetation(event) {
        setTimeout(() => {
            document.getElementsByClassName('click-link')[0].click();
        }, "1000")
    }

    getFireData(year) {
        let acresBurned = 0;
        if(year == '2022') {
            for(var i=0; i < data2022.length; i++){
                acresBurned += data2022[i].AcresBurned ? data2022[i].AcresBurned : 0
            }
            this.setState({
                targetActiveData : data2022,
                acresBurned : acresBurned
            })
        } else if (year == '2021') {
            for(var i=0; i < data2021.length; i++){
                acresBurned += data2021[i].AcresBurned ? data2021[i].AcresBurned : 0
            }
            this.setState({
                targetActiveData : data2021,
                acresBurned : acresBurned
            })
        } else if (year == '2020') {
            for(var i=0; i < data2020.length; i++){
                acresBurned += data2020[i].AcresBurned ? data2020[i].AcresBurned : 0
            }
            this.setState({
                targetActiveData : data2020,
                acresBurned : acresBurned
            })
        } else if (year == '2019') {
            for(var i=0; i < data2019.length; i++){
                acresBurned += data2019[i].AcresBurned ? data2019[i].AcresBurned : 0
            }
            this.setState({
                targetActiveData : data2019,
                acresBurned : acresBurned
            })
        } else if (year == '2018') {
            for(var i=0; i < data2018.length; i++){
                acresBurned += data2018[i].AcresBurned ? data2018[i].AcresBurned : 0
            }
            this.setState({
                targetActiveData : data2018,
                acresBurned : acresBurned
            })
        }

    }

    handleChange= async(e) => {
        await this.getFireData(e.target.value)
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
                                <option value="2022" selected>2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                            </select>
                        </div>
                    </div>
                    <div className="tile-container">
                        <br />
                        <h5 className="text-center">WILDFIRE DASHBOARD</h5>
                        <br />
                        <div className="tile" >
                            <p>Wildfires Count</p>
                            {/* <p className="counter">{this.state.targetActiveData.length}</p> */}
                            <CountUp delay={1} end={this.state.targetActiveData.length} />
                            <img src={require('../images/leonardo-rivera-flame.gif')} />
                        </div>
                        <div className="tile">
                            <p>Acres Burned</p>
                            <CountUp delay={1} end={this.state.acresBurned} />
                            {/* <p className="counter">{this.state.acresBurned}</p> */}
                        </div>
                    </div>
                    <div className="tile-container text-center">
                        Average Stats of Wildfires in California in the past couple of decades
                        <img style={{width: '100%'}} src={require('../ImageProcessing/Dashboard/FireAnalytics.png')} />
                    </div>
                </div>
                <div className="historic-container text-center">
                    <button
                        style={{marginTop: '7px'}}
                        className="btn btn-secondary btn-mat"
                            onClick={this.onGetVegetation}
                        >
                        Get Historic Wildfire Data
                    </button>
                    <a className="click-link hidden" target="_blank" href="https://code.earthengine.google.com/9aa22b6188c4a5e47c9f9717e730b70c?hideCode=true"></a>
                    <div>
                    <Link to='/new-version/overview'>
                        <button className="btn-mat lite">Overview/Contributions of the Project.</button>
                    </Link>
                    </div>
                </div>
            </div>
        );
    }
}



export default FireAnalytics;