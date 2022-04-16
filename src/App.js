import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBar";
import {Row, Col, Layout} from 'antd';
import ResultListing from "./components/ResultListing";
import React from "react";
import SimpleMap from "./components/Map";
import { Wrapper, Status, Map, Marker } from "@googlemaps/react-wrapper";
import Complete from "./components/AutoComplete";

const { Header, Footer, Sider, Content } = Layout;
function App() {
    const style='';

  return (
    <div className="App">
        <Row>
            <Col xs={2} sm={3} md={3} lg={4} xl={5}/>

            <Col xs={20} sm={18} md={18} lg={16} xl={14}>
                <h1>Find the restaurant for you!</h1>
                <SearchBar />
                <Complete/>

                <SimpleMap />
                <h1/>
                <div/>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
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


    </div>
  );
}

export default App;
