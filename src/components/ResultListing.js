import './ResultListing.css';
import React, { useState, useEffect, createContext } from 'react';
import { List, message, Avatar, Skeleton, Divider, Button, Row, Col } from 'antd';
import Table from 'react-bootstrap/Table'

const API_KEY = 'AIzaSyBjBsffMVnkwVe7AfZmca47IU5XLA3OQfE';

function ResultListing(props) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [finish, setFinish] = useState(false);
    const [name, setName] = useState([]);


    async function handleRestaurantSearch() {
        console.log("here", props.centerLoc)
        setFinish(false)
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
        const location = '&location=' + props.centerLoc.lat + ',' + props.centerLoc.lng;
        const radius = '&radius=2000';
        const type = '&keyword=restaurant';
        const key = '&key=' + API_KEY;
        const restaurantSearchUrl = url + location + radius + type + key;
        fetch(proxyUrl + restaurantSearchUrl)
            .then(response => response.json())
            .then(body => {
                // console.log(restaurantSearchUrl)
                console.log(body.results)
                setData(body.results);
                setFinish(true);
            })
            .catch(e => console.log(e))
    }
    console.log(data)
   
    useEffect(handleRestaurantSearch, []);
    useEffect(handleRestaurantSearch, [props.centerLoc]);

    while (!finish) return (<div>Loading...</div>)
    return (
        <div className="ResultListing">
            <Row justify='center'
                id="scrollableDiv"
                style={{
                    width: '100%',
                    overflow: 'center',
                    padding: '0 16px',
                    border: '1px solid rgba(140, 140, 140, 0.35)',
                }}
            >

                    <Col span={20} >
                        <Table>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>Rating</td>
                                <td>Address</td>
                                <td>Show on the Map</td>

                            </tr>
                        </tbody>
                        {data.map((item, i) =>
                            <tr key={i}>
                                <td className='restaurantname'>{item.name}</td>
                                <td>{item.rating}</td>
                                <td>{item.vicinity}</td>
                                <td><Button type="primary" disabled={props.location && props.location.find(element => element=== item['geometry']['location'])} size={'small'} onClick={()=>{
                                    props.setMarker((currentlocationlist)=> [...currentlocationlist, item['geometry']['location']])
                                }} > Show </Button></td>
                            </tr>
                        )}
                        </Table>
                    </Col>
                </Row>
        </div>
    )
}


export default ResultListing;

