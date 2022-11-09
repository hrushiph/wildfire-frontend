import React from 'react';
import {Link} from 'react-router-dom';
import './css/Progression.css';

const devUrl = '';
const prodUrl = 'https://wildfire-flask-backend.herokuapp.com';

class MiniProgression extends React.Component{
    render(){        
        var url = window.location.href;

        return(
            <div>
                {/* <div className="title-holder text-center text-lt">
                    <h5>New Wildfire Detection - Progression</h5>
                </div> */}
                <div className="navigation-holder">
                    <Link to='/new-version/extraction'>
                        {   url.includes('extraction')?
                                <button className="btn-mat">Satellite Data Extraction</button>
                            :
                            <button className="btn-mat lite">Satellite Data Extraction</button>
                        }
                    </Link>
                    <Link to="/new-version/detection">
                        {   url.includes('detection')?
                                <button className="btn-mat">Detection</button>
                            :
                            <button className="btn-mat lite">Detection</button>
                        }
                    </Link>
                    <Link to="/new-version/progression">
                        {   url.includes('progression')?
                                <button className="btn-mat">Progression</button>
                            :
                            <button className="btn-mat lite">Progression</button>
                        }
                    </Link>
                    <Link to="/new-version/evaluation">
                        {   url.includes('evaluation')?
                                <button className="btn-mat">Evaluation</button>
                            :
                                <button className="btn-mat lite">Evaluation</button>
                        }
                    </Link>
                    <Link to="/new-version/analytics">
                        {   url.includes('analytics')?
                                <button className="btn-mat">Analysis</button>
                            :
                                <button className="btn-mat lite">Analysis</button>
                        }
                    </Link>
                </div>
            </div>
        );
    }
}



export default MiniProgression;