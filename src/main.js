var React = require('react');
var ReactDOM = require('react-dom');


import Workflow from './workflow/index';
import './workflow/style/index.scss'

const Home = () => {
    return (
        <div>
            <Workflow></Workflow>
        </div>
    );
};


ReactDOM.render(<Home />, document.getElementById("app"));
