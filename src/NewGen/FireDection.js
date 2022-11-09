import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Progression.css';

const devUrl = '';
const prodUrl = 'https://wildfire-flask-backend.herokuapp.com';

class FireDetection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          id : "someUniqueId", // I would use this.props.id for a real world implementation
          imageURI : null
        };
        this.files = null;
        this.base64 = null;
    }
    
    buildImgTag(){
        let imgTag = null;
        if (this.state.imageURI !== null)
            imgTag = (<div className="row">
                        <div className="small-9 small-centered columns">
                        <img className="thumbnail" src={this.state.imageURI}></img>
                        </div>
                    </div>);
        return imgTag;
    }
    
    readURI(e){
        if(e.target.files && e.target.files[0]){
            let reader = new FileReader();
            reader.onload = function(ev){
            this.setState({imageURI:ev.target.result});
            }.bind(this);
            reader.readAsDataURL(e.target.files[0]);
            this.files = e.target.files[0]
        }
    }
    
    handleChange(e){
        this.readURI(e);
        if (this.props.onChange !== undefined)
        this.props.onChange(e);
    }

    convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file)
          fileReader.onload = () => {
            resolve(fileReader.result);
          }
          fileReader.onerror = (error) => {
            reject(error);
          }
        })
      }

    detect = async (event) => {
        console.log('detecting');
        console.log(this.files);
        this.base64 = await this.convertBase64(this.files);
        console.log(this.base64)
        console.log(typeof(this.base64))
        fetch('http://127.0.0.1:5000/api/getDetection', {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': true
            },
            body: this.base64.split(',')[1]
        })
        // .then(res => print(res))
        .then(resData => {
            console.log(resData)
        })
    }

    render(){  
        const imgTag = this.buildImgTag();
        return(
            <div style={{marginLeft:'15rem'}}>
                <div className="filter-container">
                    <div className="country-filter-container select">
                        <p for="Select Region" style={{marginBottom: '5px',fontWeight: 'bold'}}>Select Model</p>
                        <select className="select-text" name="Country" id="regionSelected" style={{width: '100%'}}>
                            <option value="YOLO" selected>YOLO</option>
                            <option value="LSTM" >LSTM</option>
                        </select>
                    </div>
                </div>
                <div className="detection-container text-center">
                    <div className="input-img-holder">
                        <div className="input-preview">
                            {imgTag}
                        </div>

                        <input
                                id={this.state.id}
                                type="file"
                                onChange={this.handleChange.bind(this)}
                                className="show-for-sr" />

                    </div>
                    <label
                        htmlFor={this.state.id}
                        className="button help-text">
                            Upload a image to detect
                    </label>
                    <div className="button-container">
                            <button
                                style={{marginTop: '7px', padding: '7px 30px'}}
                                className="btn btn-secondary btn-mat"
                                    onClick={this.detect.bind(this)}
                                >
                                Detect Progression
                            </button>
                        </div>
                </div>
            </div>
        );
    }
}



export default FireDetection;