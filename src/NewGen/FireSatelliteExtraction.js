import React from 'react';
import '../css/Progression.css';

const devUrl = '';
const prodUrl = 'https://wildfire-flask-backend.herokuapp.com';

class FireSatelliteExtraction extends React.Component{

    constructor(props) {
        super(props)

        this.onDownload = this.onDownload.bind(this);
    }

    onDownload(event) {
        console.log('onDownload')
        var fromDate = document.getElementById('fromDate').value;
        var toDate = document.getElementById('toDate').value;
        var regionSelection = document.getElementById('regionSelected').value;
        var satelliteSelected = document.getElementById('satelliteSelected').value;
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
            if(regionSelection == 'San Diego'){
            url += '36,-122,37,-121&TIME='
            } else {
            url += '34,-125,41,-120&TIME='
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
                                <option value="North California" >North California</option>
                                <option value="San Diego" selected>San Diego</option>
                            </select>
                        </div>
                        </div>
                        <div className="mini-grid-cell">
                        <div className="country-filter-container select">
                            <p for="Select Region" style={{marginBottom: '5px',fontWeight: 'bold'}}>Select Image Type</p>
                            <select className="select-text" name="Country" id="satelliteSelected" style={{width: '100%'}}>
                                <option value="TrueColor" >MODIS True Color</option>
                                <option value="MODIS_Terra_CorrectedReflectance_Bands721" selected>MODIS 721</option>
                            </select>
                        </div>
                        </div>
                        <br/>
                        <div className="grid grid-cols-1 mb-12 gap-x-6 gap-y-3 md:grid-cols-3">
                        <div className="date-picker-container">
                            <span className="form-group">
                            <p style={{marginBottom: '5px',fontWeight: 'bold'}}>From</p>
                            <input type="date" for="fromDate" value="2020-08-16" id="fromDate"/>
                            </span>
                        </div>
                        <div className="date-picker-container">
                            <span className="form-group">
                            <p style={{marginBottom: '5px',fontWeight: 'bold'}}>To</p>
                            <input type="date" for="toDate" value="2020-08-30" id="toDate"/>
                            </span>
                        </div>
                        <div className="button-container">
                            <button
                            style={{marginTop: '7px'}}
                            className="btn btn-secondary btn-mat"
                                onClick={this.onDownload}
                            >
                            Extract Images
                            </button>
                        </div>
                        </div>
                        <div className="grid mb-12 image-container text-center" >
                        {/* Images */}
                        </div>
                    </main>
                    </section>
                </div>
            </div>
        );
    }
}



export default FireSatelliteExtraction;