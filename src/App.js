import logo from './logo.svg';
import './App.css';
import { Row, Col } from 'antd';
import ResultListing from "./components/ResultListing2";
import React, { useEffect, useState } from "react";
import SimpleMap from "./components/Map";
import Complete from "./components/Complete";
import Table from 'react-bootstrap/Table'



const API_KEY = 'AIzaSyCPuTBdJFz2V9k_7QtyU6niWQg-irn84jk';
const findPos = (id) => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    return fetch(proxyUrl + 'https://maps.googleapis.com/maps/api/place/details/json?' +
        'place_id=' + id + '&fields=geometry' +
        '&key=' + API_KEY, { mode: 'cors', headers: { 'Access-Control-Allow-Origin': "*" } })
        .then(response => response.json())
        .then((data) => {
            return data.result.geometry.location;
        }).catch((err) => {
            console.log(err);
        });

}

function App() {
    const [centerPos, setCenterPos] = useState({
        value: 'North Quadrangle Residential and Academic Complex, South State Street, Ann Arbor, MI, USA',
        // place_id
        key: "ChIJy_fxa0CuPIgRWmk6N0CQ0u8" 
    });
    const [centerLoc, setCenterLoc] = useState();
    const [savedList, setSavedList] = useState([]);

    useEffect(async () => {
        let loc = await findPos(centerPos.key);
        console.log(loc)
        setCenterLoc(loc)
    }, [centerPos])

    useEffect(async () => {
        let loc = await findPos(centerPos.key);
        console.log(loc)
        setCenterLoc(loc)
    }, [])
    return (
        <div className="App">
            <Row>
                <Col xs={2} sm={3} md={3} lg={4} xl={5} />

                <Col xs={20} sm={18} md={18} lg={16} xl={14}>
                    <h1>Find the restaurant for you!</h1>
                    <Complete setCenterPos={setCenterPos} />
                    <div style={{
                        width: '100%',
                    }}>
                        <h3>Current Center:{centerPos.value}</h3>
                        <SimpleMap centerLoc={centerLoc} />
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <ResultListing  centerLoc={centerLoc} />
                    <br/>
                    <h3>
                        Reference: <a href={'https://react-google-maps-api-docs.netlify.app/'}>React Google Maps Api Style Guide</a>
                    </h3>

                </Col>



            </Row>


        </div>
    );
}

export default App;
