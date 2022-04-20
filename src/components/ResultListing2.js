import'./ResultListing.css';
import React, { useState, useEffect } from 'react';
import { List, message, Avatar, Skeleton, Divider, Button } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import Table from 'react-bootstrap/Table'




// const API_KEY = 'AIzaSyCPuTBdJFz2V9k_7QtyU6niWQg-irn84jk';
const API_KEY = 'AIzaSyBjBsffMVnkwVe7AfZmca47IU5XLA3OQfE';

function ResultListing(props) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [finish, setFinish] = useState(false);

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
    async function loadMoreData() {
        if (loading) {
            return;
        }
        setLoading(true);
        await handleRestaurantSearch()
        setFinish(true)
        console.log(data.results)
        setLoading(false)
    }

    useEffect(handleRestaurantSearch, []);
    useEffect(handleRestaurantSearch, [props.centerLoc]);

    


    while (!finish) return (<div>Loading...</div>)
    return (
        <div className="ResultListing">
            <div
                id="scrollableDiv"
                style={{
                    width: '100%',
                    overflow: 'center',
                    padding: '0 16px',
                    border: '1px solid rgba(140, 140, 140, 0.35)',
                }}
            >
                <Table>
                    <tbody>
                        <tr class="font-weight-bold">
                            <td>Name</td>
                            <td>Rating</td>
                            <td>Address</td>
                        </tr>
                    </tbody>
                    {data.map((item, i) =>
                    <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.rating}</td>
                        <td>{item.vicinity}</td>
                        <td><Button type="primary" size={'small'}>
                                    Save </Button></td>
                    </tr>
                    )}
                    
                </Table>
                
            </div>
        </div>
    )}


export default ResultListing;
