import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Progression.css';

const devUrl = '';
const prodUrl = 'https://wildfire-flask-backend.herokuapp.com';

class FireSatelliteExtraction extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            image : "",
            temp_f : '',
            wind_kph : '',
            humidity : '',
            wind_dir : '',
            date : '',
            toDate: '',
            fromDate: '',
            showWeather : false
        };
        this.onDownload = this.onDownload.bind(this);
        this.onFireDetect = this.onFireDetect.bind(this);
        this.onFireDetectLive = this.onFireDetectLive.bind(this);
        this.onGetVegetation = this.onGetVegetation.bind(this);
    }

    onGetVegetation(event) {
        this.setState({
            fromDate: document.getElementById('fromDate').value,
            toDate: document.getElementById('toDate').value
        })
        setTimeout(() => {
            document.getElementsByClassName('click-link')[0].click();
        }, "1000")
    }
    onFireDetectLive(event) {
        document.getElementsByClassName('spinner-detection')[0].classList.remove('hidden')
        var latlong = document.getElementById('latlong').value
        var fromDate = document.getElementById('fromDate').value
        sessionStorage.setItem("latlong", latlong);
        sessionStorage.setItem("date", fromDate);
        fetch('http://127.0.0.1:5000/api/getSatelliteImageDetectionLive', {
            method: "POST",
            mode: "cors",
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ latlong : latlong, date : document.getElementById('fromDate').value })
        },{mode: 'cors'})
        .then(res => res.json())
        .then(resData => {
            document.getElementsByClassName('image-container')[0].innerHTML = '';  
            document.getElementsByClassName('detection-container')[0].classList.remove('hidden')  
            this.setState({
                image : resData.image
            });
            document.getElementsByClassName('spinner-detection')[0].classList.add('hidden')
        }).catch(function(e) {
            console.log("error");
            console.log(e);
            document.getElementsByClassName('spinner-detection')[0].classList.add('hidden')
        });

        fetch('http://api.weatherapi.com/v1/current.json?key=d792236248d74cf38a170519222211&q='+latlong+'&aqi=no', {
            method: "POST",
            mode: "cors",
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: ''
        },{mode: 'cors'})
        .then(res => res.json())
        .then(resData => {
            console.log(resData)
            this.setState({
                temp_f : resData.current.temp_f,
                wind_kph : resData.current.wind_kph,
                humidity : resData.current.humidity,
                wind_dir : resData.current.wind_dir,
                date: '11/22/2022',
                showWeather: true
            })
        }).catch(function(e) {
            console.log("error");
            console.log(e);
        });
    }
    
    onFireDetect(event) {
        document.getElementsByClassName('spinner-detection')[0].classList.remove('hidden')
        var latlong = document.getElementById('latlong').value
        var fromDate = document.getElementById('fromDate').value
        sessionStorage.setItem("latlong", latlong);
        sessionStorage.setItem("date", fromDate);
        fetch('http://127.0.0.1:5000/api/getSatelliteImageDetection', {
            method: "POST",
            mode: "cors",
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ latlong : latlong, date : document.getElementById('fromDate').value })
        },{mode: 'cors'})
        .then(res => res.json())
        .then(resData => {
            document.getElementsByClassName('image-container')[0].innerHTML = '';  
            document.getElementsByClassName('detection-container')[0].classList.remove('hidden')  
            this.setState({
                image : resData.image
            });
            document.getElementsByClassName('spinner-detection')[0].classList.add('hidden')
        }).catch(function(e) {
            console.log("error");
            console.log(e);
            document.getElementsByClassName('spinner-detection')[0].classList.add('hidden')
        });

        fetch('http://api.weatherapi.com/v1/current.json?key=d792236248d74cf38a170519222211&q='+latlong+'&aqi=no', {
            method: "POST",
            mode: "cors",
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: ''
        },{mode: 'cors'})
        .then(res => res.json())
        .then(resData => {
            console.log(resData)
            this.setState({
                temp_f : resData.current.temp_f,
                wind_kph : resData.current.wind_kph,
                humidity : resData.current.humidity,
                wind_dir : resData.current.wind_dir,
                date: document.getElementById('fromDate').value,
                showWeather : false
            })
        }).catch(function(e) {
            console.log("error");
            console.log(e);
        });
    }

    onDownload(event) {
        console.log('onDownload');
        document.getElementsByClassName('detection-container')[0].classList.add('hidden')
        this.setState({
            image : ''
        });
        document.getElementsByClassName('image-container')[0].innerHTML = '';
        var fromDate = document.getElementById('fromDate').value;
        var toDate = document.getElementById('toDate').value;
        var regionSelection = document.getElementById('regionSelected').value;
        var satelliteSelected = document.getElementById('satelliteSelected').value;
        var latlong = document.getElementById('latlong').value;
        var currentDate = new Date(fromDate);
        console.log(fromDate, toDate)
        var endDate = new Date(toDate);

        while(currentDate <= endDate) {
            currentDate = new Date(currentDate.setDate(currentDate.getDate()+1));
            console.log(currentDate.toISOString().split('T')[0]);
            this.src="./image.jpg"
            var url = 'https://wvs.earthdata.nasa.gov/api/v1/snapshot?REQUEST=GetSnapshot&&CRS=EPSG:4326&WRAP=DAY&LAYERS='
            var height = 800
            url += satelliteSelected // Future integration with various satellite image type.
            url += '&FORMAT=image/jpeg&HEIGHT='+height+'&WIDTH='+height+'&BBOX='
            if(regionSelection == 'San Diego' && !latlong){
            // url += '41.010577,-122.544551,41.731471,-121.772747&TIME='
                url += '36,-122,37,-121&TIME='
            } else if(latlong){
                url += latlong + '&TIME='
            }
            url += currentDate.toISOString().split('T')[0]
            var link;
            link = document.createElement('img');
            link.src = url;
            console.log(document.getElementsByClassName('image-container')[0])
            document.getElementsByClassName('image-container')[0].appendChild(link)
        }
    }

    render(){        
        var url = window.location.href;

        return(
            <div style={{marginLeft:'15rem'}}>
                <div className="satellite-container">
                <section className="container-fluid flex items-center justify-center text-center">
                    <main className="mx-auto my-16 md:max-w-xl">
                        <br />
                        <h5 className="mb-4 text-lt" style={{textTransform: 'uppercase'}}>Satellite Image Data Extraction</h5>
                        <div className="mini-grid-cell">
                            <div className="country-filter-container select">
                                <p for="Select Region" style={{marginBottom: '5px',fontWeight: 'bold'}}>Select Region</p>
                                <select className="select-text" name="Country" id="regionSelected" style={{width: '100%'}}>
                                    {/* <option value="North California" >North California</option> */}
                                    <option value="San Diego" selected>San Diego</option>
                                </select>
                            </div>
                        </div>
                        <div className="mini-grid-cell">
                            <div className="country-filter-container select">
                                <p for="Select Region" style={{marginBottom: '5px',fontWeight: 'bold'}}>Select Image Type</p>
                                <select className="select-text" name="Country" id="satelliteSelected" style={{width: '100%'}}>
                                    <option value="MODIS_Terra_CorrectedReflectance_TrueColor" >MODIS True Color</option>
                                    <option value="MODIS_Terra_CorrectedReflectance_Bands721" selected>MODIS 721</option>
                                </select>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <div className="mini-grid-cell">
                            <div className="country-filter-container select">
                                <p for="Select Region" style={{marginBottom: '5px',fontWeight: 'bold'}}>Enter Lat-Long For Custom Area</p>
                                <input className="full-input" type="text" for="latlong" defaultValue="36,-122,37,-121" id="latlong"/>
                            </div>
                        </div>
                        <br/>
                        <div className="grid grid-cols-1 mb-12 gap-x-6 gap-y-3 md:grid-cols-3">
                            <div className="date-picker-container">
                                <span className="form-group">
                                <p style={{marginBottom: '5px',fontWeight: 'bold'}}>From</p>
                                <input type="date" for="fromDate" defaultValue="2020-09-22" id="fromDate"/>
                                </span>
                            </div>
                            <div className="date-picker-container">
                                <span className="form-group">
                                <p style={{marginBottom: '5px',fontWeight: 'bold'}}>To</p>
                                <input type="date" for="toDate" defaultValue="2020-09-23" id="toDate"/>
                                </span>
                            </div>
                            <div className="button-container">
                                <button
                                style={{marginTop: '7px', marginRight: '10px'}}
                                className="btn btn-secondary btn-mat"
                                    onClick={this.onDownload}
                                >
                                Extract Images
                                </button>
                                <button
                                    style={{marginTop: '7px', marginRight: '10px'}}
                                    className="btn btn-secondary btn-mat"
                                        onClick={this.onFireDetect}
                                    >
                                    Detect Fire
                                </button>
                                <button
                                    style={{marginTop: '7px', marginRight: '10px'}}
                                    className="btn btn-secondary btn-mat"
                                        onClick={this.onFireDetectLive}
                                    >
                                    Realtime Detection
                                </button>
                                <button
                                    style={{marginTop: '7px'}}
                                    className="btn btn-secondary btn-mat"
                                        onClick={this.onGetVegetation}
                                    >
                                    Get Vegetation Data
                                </button>
                                <a className="click-link hidden" target="_blank" href={`https://code.earthengine.google.com/5690acb20d464d6e28536dd5ddda8129?hideCode=true#date=${this.state.fromDate}i${this.state.toDate}`}></a>
                                {/* <a className="click-link hidden" target="_blank" href="https://code.earthengine.google.com/5690acb20d464d6e28536dd5ddda8129?hideCode=true#date=2020-08-22i2020-08-23"></a> */}
                            </div>
                        </div>
                        <div className="grid mb-12 image-container text-center" >
                            {/* Images */}
                        </div>
                        <div className="gird mb-12 image-container text-center detection-container hidden">
                            <h5 style={{marginTop: '-30px', marginBottom: '20px'}}>DETECTION</h5>
                            <div className="weather-container" style={{marginBottom: '10px'}}>
                                <span style={{marginRight: '10px'}}>Date - {this.state.date}</span>
                                <span style={{marginRight: '10px', display : `${this.state.showWeather ? 'inline' : 'none' }`}}>Temperature - {this.state.temp_f} F,</span>
                                <span style={{marginRight: '10px', display : `${this.state.showWeather ? 'inline' : 'none' }`}}>Wind Speed - {this.state.wind_kph} mph,</span>
                                <span style={{marginRight: '10px', display : `${this.state.showWeather ? 'inline' : 'none' }`}}>Humidity - {this.state.humidity} mph,</span>
                                <span style={{marginRight: '10px', display : `${this.state.showWeather ? 'inline' : 'none' }`}}>Wind Direction - {this.state.wind_dir} mph</span>
                            </div>
                            <img className="img-preview-satellite" src={`data:image/png;base64,${this.state.image}`} />
                            <div className="button-container">
                                <button
                                    style={{marginTop: '7px', padding: '7px 30px'}}
                                    className="btn btn-secondary btn-mat"
                                    >
                                        <Link style={{color: "#fff", textDecoration: 'none'}} to="/new-version/progression">Analyze Progression</Link>
                                </button>
                            </div>
                        </div>
                    </main>
                    </section>
                </div>
            </div>
        );
    }
}



export default FireSatelliteExtraction;