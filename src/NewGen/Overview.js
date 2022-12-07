import React from 'react';
import 'leaflet/dist/leaflet.css';
import '../css/Progression.css';
import backgroundImage from '../images/backgroundImage.jpeg'
import {Link} from 'react-router-dom';

const devUrl = '';
const prodUrl = 'https://wildfire-ml-flask.herokuapp.com';

class Overview extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        document.getElementsByClassName('wildfire-navigation-container')[0].innerHTML = ''
        document.getElementsByClassName('navigation-mini-container')[0].innerHTML = ''
    }

    render(){
        return(
            <div className="overview-container">
                <section id="home" style={{backgroundImage: `url(${backgroundImage})`}}>
                    <div class="overlay"></div>
                    <div class="home-content-table">  
                        <div class="home-content-tablecell">
                            <div class="row">
                                <div class="col-twelve" style={{margin: "0 auto"}}>            
                                    <h3 class="animate-intro"></h3>
                                    <h1 class="animate-intro">
                                    Real Time Wildfire Detection & Progression<br/><br/>
                                    By<br/><br/>
                                    Hrushikesh Pokala <br/>
                                    Preeti Khatri<br/>
                                    Saroj Saran<br/>
                                    Yogita Suryavanshi<br/>
                                    </h1> 
                                    <div class="more animate-intro">
                                        <a class="smoothscroll button stroke" href="#overview">
                                            Learn More
                                        </a>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="overview">
                    <section id="about">
                        <div class="row about-wrap text-center" style={{maxWidth: '1075px'}}>
                        <div class="col-full">
                            <div class="about-profile-bg"></div>
                            <div class="intro">
                                <h3 class="animate-this">Abstract</h3>
                                <p  class="lead animate-this" style={{textAlign: 'justify'}}>
                                    Wildfires are now a frequent natural calamity that can be extremely damaging and dangerous to
                                    mankind, wildlife, buildings, and crops. Both humans and animals may experience severe health
                                    issues as a result of a wildfire. Forest regrowth has slowed down over time as a result of
                                    unfavorable changes in the climate. Additionally, the rise in temperature brought on by global
                                    warming has increased the frequency of wildfires. There hasn't been a good mechanism in place
                                    to forecast how wildfires will develop in real time as key variables in the fire ecology change.
                                    We have therefore developed a Real-Time Wildfire Prediction and Progression system using
                                    Machine Learning and Reinforcement Learning Algorithms to assist the public, firemen, and
                                    other first responders. In order to study the spread patterns of wildfires, this paper will explain
                                    the machine learning approaches used to identify wildfires in real-time and make progression
                                    predictions. The prediction system has been divided into wildfire detection and wildfire
                                    progression. A web portal has been coupled with reinforcement learning and machine learning
                                    models to put this strategy into practice. The web portal uses real-time satellite imagery to spot
                                    fires, and by using the fire's location coordinates and date, it can anticipate how far it will spread.
                                    We have also given attention to other fire-related environmental factors, including vegetation,
                                    land cover, weather, wind speed, elevation, and the fire perimeter. We have verified the
                                    progression predictions of the model using these parameters, The website will be a useful tool for
                                    analysts, fire departments, and health officials to comprehend the real-time detection and
                                    progression prediction of wildfires and to make timely decisions, such as evacuating regions at
                                    risk for wildfires as well as managing and containing the wildfires.
                                    <br/>
                                    <strong>Keywords: Qlearning, ValuebyValue, Machine learning, Reinforcement learning, Wildfire detection, Wildfire progression,
                                    YOLO v3, efficientDet-D0</strong>
                                </p>
                            </div>   
                        </div> 
                        </div> 
                    </section> 
                </section>
                <section id="acknowledgement">
                    <section id="about">
                        <div class="row about-wrap text-center" style={{maxWidth: '1075px'}}>
                        <div class="col-full">
                            <div class="about-profile-bg"></div>
                            <div class="intro">
                                <h3 class="animate-this">Acknowledgment</h3>
                                <p  class="lead animate-this" style={{textAlign: 'justify', marginTop: '25px'}}>
                                    We would like to extend our profound gratitude to Dr. Jerry Gao, our mentor and advisor
                                    from the San Jose State University Department of Computer Engineering. When we encountered
                                    difficulties or had inquiries regarding our project or writing, Prof. Gao's office door was always
                                    open. The success of this wonderful project was made possible by his constant support and faith
                                    in our talents.
                                    <br/>
                                    <br/>
                                    We also like to thank Dr. Lee Chang, professor, and director of the Department of
                                    Applied Data Science, for his leadership (DADS). He imparted his wisdom to us and provided us
                                    with sincere, precious counsel and assistance, for which we greatly appreciate and owe him.
                                </p>
                            </div>   
                        </div> 
                        </div> 
                    </section> 
                </section>
                <section id="datasource">
                    <section id="datasource-wrapper">
                        <div class="about-wrap text-center" style={{maxWidth: '1075px', margin: "0 auto"}}>
                            <div class="row">
                                <div className="container">
                                    <div class="about-profile-bg"></div>
                                    <div class="intro">
                                        <h3 class="animate-this">Data Sources</h3>
                                    </div> 
                                </div>  
                            </div>
                            <div className="row cubicle">
                                <div className="col-2">Remote Sensing</div>
                                <div className="col-2">Land Cover</div>
                                <div className="col-2">Satellite Image</div>
                                <div className="col-2">Perimeter</div>
                                <div className="col-2">Weather - Wind</div>
                                <div className="col-2">Elevation - Wind</div>
                            </div> 
                            <div className="text-right" style={{marginTop: '10px'}}>
                                - All these section Components are Designed, Developed & Integrated by all team members equally.
                                <p>Web Development for Data Extraction of MODIS and GOES Live- Hrushikesh P</p>
                            </div>
                        </div> 
                    </section> 
                </section>
                <section id="models" style={{background: '#fff', color: '#000', margin: '50px 0', padding: '50px 0'}}>
                    <section id="models-wrapper">
                        <div class="about-wrap text-center" style={{maxWidth: '1075px', margin: "0 auto"}}>
                            <div class="row">
                                <div className="container">
                                    <div class="about-profile-bg"></div>
                                    <div class="intro">
                                        <h3 class="animate-this">Models Used</h3>
                                    </div> 
                                </div>  
                            </div>
                            <div className="row cubicle black">
                                <div className="col-6">Detection - YOLO v3, efficientDet-D0</div>
                                <div className="col-6">Progression - Qlearning, Value Iteration</div>
                            </div> 
                            <div className="text-right" style={{marginTop: '10px'}}>
                                <p>- All these Detection Models are Designed, Developed by Saroj Saran, Yogita Suryavanshi</p>
                                <p>- All these Progression Models are Designed, Developed, Integrated by Hrushikesh Pokala, Preeti Khatri</p>
                            </div>
                        </div> 
                    </section> 
                </section>
                <section id="components" style={{margin: '50px 0', padding: '50px 0'}}>
                    <section id="components-wrapper">
                        <div class="about-wrap text-center" style={{maxWidth: '1075px', margin: "0 auto"}}>
                            <div class="row">
                                <div className="container">
                                    <div class="about-profile-bg"></div>
                                    <div class="intro">
                                        <h3 class="animate-this">Components</h3>
                                    </div> 
                                </div>  
                            </div>
                            <div className="row cubicle">
                                <div className="col-4">Detection</div>
                                <div className="col-4">Progression</div>
                                <div className="col-4">System Architecture</div>
                            </div> 
                            <div className="text-right" style={{marginTop: '10px'}}>
                                <p>- All these Detection Models are Designed, Developed by Saroj Saran, Yogita Suryavanshi</p>
                                <p>- All these Progression Models are Designed, Developed, Integrated by Hrushikesh Pokala, Preeti Khatri</p>
                                <p>- All of the System Architecture is Designed, Developed, Integrated by Hrushikesh Pokala</p>
                            </div>
                        </div> 
                    </section> 
                </section>
                <section id="detection-container" style={{background: '#fff', color: '#000', margin: '50px 0', padding: '50px 0'}}>
                    <section id="detection-wrapper">
                        <div class="about-wrap text-center" style={{maxWidth: '1075px', margin: "0 auto"}}>
                            <div class="row">
                                <div className="container">
                                    <div class="about-profile-bg"></div>
                                    <div class="intro">
                                        <h3 class="animate-this">Detection</h3>
                                    </div> 
                                    <p class="lead animate-this" style={{textAlign: 'justify', marginTop: '25px'}}>
                                    For Satellite Imagery we have used MODIS and GOES 16 Satellites, The satellite image
                                    dataset is the main input data for the detection of wildfire which can be retrieved from the AWS
                                    Open Registry to extract the near real-time satellite images from the GOES 16 satellite whereas
                                    we have also considered MODIS satellite images taken from Google Earth Engine. Here GOES
                                    16 was considered because it provides a real-time image extraction flexibility where they have a

                                    Realtime Wildfire Progression Analysis and Prediction Using Machine Learning 97

                                    drawback of low resolution compared with MODIS, whereas Mpodis provides us the daily
                                    images thus limiting us from having a real-time prediction but the resolution of these satellites
                                    are very good compared to the GOES 16 satellite.
                                    The images were extracted for different resolutions and dimensions for different sources
                                    of satellite imagery, hence it requires the images to be resized to a specific of 416* 416, and also
                                    to train the model using these images to read and learn wildfire objects we have made use of an
                                    open source AI tool Roboflow, which provides us the flexibility to annotate the wildfire objects
                                    on the training dataset and to generate different annotation file required for different models.
                                    </p>
                                    <img src={require('../images/output.JPG')}></img>
                                </div>  
                            </div>
                            <div className="text-right" style={{marginTop: '10px'}}>
                                - All these section Components are Designed, Developed & Integrated by Saroj Saran, Yogita Suryavanshi
                            </div>
                        </div> 
                    </section> 
                </section>
                <section id="progression-container" style={{margin: '50px 0', padding: '50px 0'}}>
                    <section id="progression-wrapper">
                        <div class="about-wrap text-center" style={{maxWidth: '1075px', margin: "0 auto"}}>
                            <div class="row">
                                <div className="container text-center">
                                    <div class="about-profile-bg"></div>
                                    <div class="intro">
                                        <h3 class="animate-this">Progression</h3>
                                    </div> 
                                    <p class="lead animate-this" style={{textAlign: 'justify', marginTop: '25px'}}>
                                        This project will aim at designing an integrated model which includes a wildfire detection
                                        and progression model, focusing on building a web application that provides the flexibility to the
                                        end users to feed in any location’s latitude and longitude which will act as the initial point for the
                                        project, from where the object detection models implemented will be triggered to identify and
                                        detect the wildfires in that location, and if the wildfire is detected then the location details will be
                                        further fed to the wildfire progression model to identify the progression which is expected to
                                        occur, which would help to take further required actions to control the wildfire. A predictive
                                        progression analysis model for wildfire detection and progression and a web application portal is
                                        the main deliverables in this project which will highlight the detection of wildfire and the
                                        direction of the spread in the area, with the latitude and longitude of the area. A dynamic map
                                        will be the result of the web application which will show the detection point of the fire and the
                                        direction of the wildfire spread through reinforcement learning models. The predictive model
                                        will detect the origination of the wildfires and the direction of the progression of the wildfires.
                                        Real-time data will be used to get accurate predictions of the model. The web application will
                                        also detect regional real-time wildfire progressions. This application can be used in different
                                        areas for the study of wildfire progression and to understand the different patterns of wildfire
                                        spread. The application can be further used for research studies as well. The web application will
                                        also allow users to find out the model used along with the prediction of the model. Deliverables
                                        will also include a Jupyter notebook which contains the code for data preprocessing/data
                                        modeling of reinforcement learning models and model deployment of detection models, web
                                        application, main report, and the demo. Parameters such as active wildfire, wind, temperature,
                                        humidity, air quality, vegetation land cover type, NDVI values, elevation, satellite images, and
                                        remote sensing data determine the resilience of the model.
                                    </p>
                                    <img src={require('../ImageProcessing/final_output_progression.gif')}></img>
                                </div>
                            </div>
                            <div className="text-right" style={{marginTop: '10px'}}>
                                - All these section Components are Designed, Developed & Integrated by Hrushikesh P, Preeti Khatri
                            </div>

                        </div> 
                    </section> 
                </section>
                <section id="web-container" style={{margin: '50px 0', padding: '50px 0'}}>
                    <section id="web-wrapper">
                        <div class="about-wrap text-center" style={{maxWidth: '1075px', margin: "0 auto"}}>
                            <div class="row">
                                <div className="container text-center">
                                    <div class="about-profile-bg"></div>
                                    <div class="intro">
                                        <h3 class="animate-this">Web App</h3>
                                    </div> 
                                </div>
                            </div>
                            <div className="row cubicle">
                                <div className="col-4">UI - React</div>
                                <div className="col-4">API - Flask</div>
                                <div className="col-4">Backend - Model Controllers</div>
                            </div>
                            <div className="text-right" style={{marginTop: '10px'}}>
                                - All these section Components are Designed, Developed, Tested & Integrated by Hrushikesh P
                            </div>
                        </div> 
                    </section> 
                </section>
                <section id="web-components-container" style={{background: '#fff', color: '#000', margin: '50px 0', padding: '50px 0'}}>
                    <section id="web-components-wrapper">
                        <div class="about-wrap text-center" style={{maxWidth: '1075px', margin: "0 auto"}}>
                            <div class="row">
                                <div className="container text-center">
                                    <div class="about-profile-bg"></div>
                                    <div class="intro">
                                        <h3 class="animate-this">Web App Components</h3>
                                    </div> 
                                </div>
                            </div>
                            <div className="row cubicle black">
                                <div className="col-4"><p style={{marginBottom: '10px'}}>Data Extraction </p>
                                    <Link to="/new-version/extraction"><p>Satellite Data Extraction</p></Link>
                                    <Link to="/new-version/extraction"><p>Realtime MODIS Detection</p></Link>
                                    <Link to="/new-version/extraction"><p>Realtime GOES Detection</p></Link>
                                    <Link to="/new-version/extraction"><p>Realtime Vegetation</p></Link>
                                </div>
                                <div className="col-4"><p style={{marginBottom: '10px'}}>Detection</p>
                                    <Link to="/new-version/detection"><p>Detection Component</p></Link>
                                </div>
                                <div className="col-4"><p style={{marginBottom: '10px'}}>Progression</p>
                                    <Link to="/new-version/progression"><p>Progression Component</p></Link>
                                    <Link to="/new-version/progression"><p>Advanced Progression Result Component</p></Link>
                                </div>
                                <div className="col-4"><p style={{marginBottom: '10px'}}>Evaluation</p>
                                    <Link to="/new-version/evaluation"><p>Results Component</p></Link>
                                </div>
                                <div className="col-4"><p style={{marginBottom: '10px'}}>Dashboard</p>
                                    <Link to="/new-version/analytics"><p>FireCA FireData Component</p></Link>
                                    <Link to="/new-version/analytics"><p>Dashlets Component</p></Link>
                                    <Link to="/new-version/analytics"><p>Historic Wildfire Component</p></Link>
                                </div>
                            </div>
                            <div className="text-right" style={{marginTop: '10px'}}>
                                - All the Web Components are Designed, Developed, Tested, Integrated, Deployed by Hrushikesh P
                            </div>
                        </div> 
                    </section> 
                </section>
                <section id="web-container" style={{background: '#fff', color: '#000', margin: '50px 0', padding: '50px 0'}}>
                    <section id="web-wrapper">
                        <div class="about-wrap text-center" style={{maxWidth: '1075px', margin: "0 auto"}}>
                            <div class="row">
                                <div className="container text-center">
                                    <div class="about-profile-bg"></div>
                                    <div class="intro">
                                        <h3 class="animate-this">API Flask</h3>
                                    </div> 
                                </div>
                            </div>
                            <div className="row cubicle">
                                <div className="col-6">Satellite - File Upload - Detection
                                    <p>API URL - http://localhost:5000/getDetection</p>
                                </div>
                                <div className="col-6">Detection - MODIES Real time Model Detection
                                    <p>API URL - http://localhost:5000/getSatelliteImageDetection</p>
                                </div>
                                <div className="col-6">Detection - GOES Realtime Detection
                                    <p>API URL - http://localhost:5000/getSatelliteImageDetectionLive</p>
                                </div>
                                <div className="col-6">Progression - Evaluating Qlearing Model.
                                    <p>API URL - http://localhost:5000/getProgression</p>
                                </div>
                                <div className="col-6">Progression - Point Analytics.
                                    <p>API URL - http://localhost:5000/getPointEvaluation</p>
                                </div>
                                <div className="col-6">Analytics - CA Fire Active Data.
                                    <p>API URL - http://localhost:5000/getActiveFireData</p>
                                </div>
                                <div className="col-6">Analytics - CA Fire Active Data.
                                    <p>API URL - http://localhost:5000/getHistoricalFireData</p>
                                </div>
                            </div>
                            <div className="text-right" style={{marginTop: '10px'}}>
                                - All these section Components are Designed, Developed, Tested & Integrated by Hrushikesh P
                            </div>
                        </div> 
                    </section> 
                </section>
                <section id="web-container" style={{margin: '50px 0', padding: '50px 0'}}>
                    <section id="web-wrapper">
                        <div class="about-wrap text-center" style={{maxWidth: '1075px', margin: "0 auto", fontFamily: 'fantasy'}}>
                            <div class="row">
                                <div className="container text-center">
                                    <div class="about-profile-bg"></div>
                                    <div class="intro">
                                        <h3 class="animate-this">Team Contribution - Highlevel</h3>
                                    </div> 
                                </div>
                            </div>
                            <div className="row cubicle">
                                <div className="col-3"><p style={{textDecoration: 'underline'}}>Hrushikesh Pokala</p>
                                    <p>Data Collection</p>
                                    <p>Data Analysis</p>
                                    <p>Data Engineering - Progression</p>
                                    <p>Developed, Designed, Tested - Progression</p>
                                    <p>Integration with SJSU Wildfire</p>
                                    <p>Enhanced UI, API Development</p>
                                    <p>System Design</p>
                                    <p>System Coding</p>
                                    <p>Deployment</p>
                                    <p>*All the React, Flask, Integration with SJSU Wildfire Components.*</p>
                                </div>
                                <div className="col-3"><p style={{textDecoration: 'underline'}}>Preeti Khatri</p>
                                    <p>Data Collection</p>
                                    <p>Data Analysis</p>
                                    <p>Data Engineering - Progression</p>
                                    <p>Data Integration</p>
                                    <p>Developed, Designed, Tested - Progression</p>
                                </div>
                                <div className="col-3"><p style={{textDecoration: 'underline'}}>Saroj Saran</p>
                                    <p>Data Collection</p>
                                    <p>Data Analysis</p>
                                    <p>Data Engineering - Detection</p>
                                    <p>Data Augmentation - Detection</p>
                                    <p>Developed, Designed, Tested - Detection</p>
                                </div>
                                <div className="col-3"><p style={{textDecoration: 'underline'}}>Yogita Suryavanshi</p>
                                    <p>Data Collection</p>
                                    <p>Data Analysis</p>
                                    <p>Data Engineering - Detection</p>
                                    <p>Data Augmentation - Detection</p>
                                    <p>Developed, Designed, Tested - Detection</p>
                                </div>
                            </div>
                        </div> 
                    </section> 
                </section>
                <section id="conclusion-container" style={{margin: '50px 0', padding: '50px 0'}}>
                    <section id="conclusion-wrapper">
                        <div class="about-wrap text-center" style={{maxWidth: '1075px', margin: "0 auto"}}>
                            <div class="row">
                                <div className="container text-center">
                                    <div class="about-profile-bg"></div>
                                    <div class="intro">
                                        <h3 class="animate-this">Conclusion</h3>
                                    </div> 
                                </div>
                            </div>
                            
                            <p class="lead animate-this" style={{textAlign: 'justify', marginTop: '25px'}}>
                                We were able to develop a strategy to improve our current systems by proposing an
                                approach that has the potential to model both wildfire detection and wildfire progression in near
                                to real-time from this research, which allowed us to complete a thorough literature review of
                                existing research and systems on the problem of predicting wildfire's progression. As a continued
                                design and enhancement, we were able to identify and reflect the conditions of the area, and we
                                were able to find crucial information about the vegetation land cover and vegetation quality. The
                                project development involved a detailed strategy of data collection, data cleansing, preparation,
                                and transformation into a format that can be used for our model development. In this process we
                                designed two subsections to have a complete working model, first of all, the wildfire detection
                                model is initiated first upon passing the location information, we have designed the two most
                                efficient models for the detection purpose which are capable of making near real-time
                                predictions with our MODIS and GOES 16 satellite imagery, EfficientDetD0 and YOLO V3
                                which gave us an accuracy of 99%.. and as the next stage when a wildfire is identified by our
                                wildfire detection model the information will be passed on to our wildfire progression model to
                                make a prediction on its next progression and direction of progress. We have designed two
                                efficient models for our progression analysis which is based on the reward system and penalties
                                using reinforcement algorithms, Value iteration, and Q Learning which gave us the best
                                progression results for our focused wildfire of “CZU Lightning Complex”, the model gave us an
                                accuracy of 90%. Here we still have a scope to improve the performance of our model to achieve
                                better accuracy and prediction than our current progress, hence more study and development are
                                still required. Additionally, we want users like firefighters to have access to the model and the
                                outcome of the prediction. We developed a website where visitors may enter a location and a
                                date of interest to access and view the forecast result with our most efficient models running in
                                the backend to make wildfire detection and prediction.
                                <br />
                                Overall we were able to achieve near real-time wildfire detection with our most efficient
                                YOLO V3 model with an accuracy of 99%, whereas on the other hand, we had some challenges
                                implementing near real-time prediction on the wildfire progression modeling, hence this is our
                                next milestone to enhance our progression predictions to make it near real-time. A key factor that
                                was a challenging aspect of this implementation was capturing a near real-time vegetation NDVI
                                dataset. We initially tried to retrieve NDVI value information from the GOES 16 satellite but we
                                couldn't extract it accurately as it was not properly calculating the NDVI from the bands of the
                                satellite properly. Thus we decided to move forward and validate our progression model with the
                                daily MODIS satellite which was giving the NDVI Values on day to day basis. In this way, our
                                project offers a creative solution to a societal issue that is on the rise and which contributes
                                towards containing such issues, with additional features and guidelines to boost the system's
                                efficiency.
                            </p>
                        </div> 
                    </section> 
                </section>
            </div>
        );
    }
}

export default Overview;
