import logo from './logo.svg';
import './App.css';
import {Row, Col} from 'antd';
import ResultListing from "./components/ResultListing";
import React, {useState} from "react";
import SimpleMap from "./components/Map";

import Complete from "./components/Complete";
import GoogleSearch from "./components/GoogleSearch";


function App() {
    const[centerPos, setCenterPos] = useState({value: 'North Quadrangle Residential and Academic Complex, South State Street, Ann Arbor, MI, USA', key:"ChIJy_fxa0CuPIgRWmk6N0CQ0u8"});

    return (
        <div className="App">
            <Row>
                <Col xs={2} sm={3} md={3} lg={4} xl={5}/>

                <Col xs={20} sm={18} md={18} lg={16} xl={14}>
                    <h1>Find the restaurant for you!</h1>
                    <Complete setCenterPos={setCenterPos}/>
                    <h2>Current Center:{centerPos.value}</h2>
                    <SimpleMap centerPos={centerPos}/>
                    <GoogleSearch centerPos={centerPos}/>
                    <h1/>
                    <div/>
                    <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                        <Col className="gutter-row" span={8}>
                            <h3>Google</h3>
                            <ResultListing/>
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <h3>Yelp</h3>
                            <ResultListing/>
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <h3>Yelp</h3>
                            <ResultListing/>
                        </Col>
                    </Row>


                </Col>
                <Col xs={2} sm={3} md={3} lg={4} xl={5}/>


            </Row>
            Reference:
            <ul>
                <li><a href={'https://react-google-maps-api-docs.netlify.app/'}>React Google Maps Api Style Guide</a>
                </li>
            </ul>

        </div>
    );
}

export default App;
