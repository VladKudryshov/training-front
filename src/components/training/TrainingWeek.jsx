import React, {Component} from 'react';
import "./index.css"
import {Link} from "react-router";

const Content = () => (
    <div className="mrtop10 trainings gap">

        <div className="set-days">
            <div className="card-item">
                <Link to="/0"><h3>Спина</h3></Link>
                <div className="kv"/>
            </div>
            <div className="card-item">
                <Link to="/1"><h3>Ноги</h3></Link>
                <div className="kv"/>
            </div>
        </div>
    </div>
)
export default Content;

