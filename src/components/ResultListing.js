import React, {useState, useEffect} from 'react';
import {List, message, Avatar, Skeleton, Divider, Button} from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';

// const API_KEY = 'AIzaSyCPuTBdJFz2V9k_7QtyU6niWQg-irn84jk';
const API_KEY = 'AIzaSyBjBsffMVnkwVe7AfZmca47IU5XLA3OQfE';

function ResultListing(props) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [finish, setFinish] = useState(false);

    async function handleRestaurantSearch () {
        console.log("here", props.centerLoc)
        setFinish(false)
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
        const location = '&location='+ props.centerLoc.lat+','+props.centerLoc.lng;
        const radius = '&radius=2000';
        const type = '&keyword=restaurant';
        const key = '&key=' + API_KEY;
        const restaurantSearchUrl = url + location + radius + type + key;
        fetch(proxyUrl + restaurantSearchUrl)
            .then(response => response.json())
            .then(body => {
                console.log(restaurantSearchUrl)
                console.log(body.results)
                setData(body.results);
                setFinish(true);
            })
            .catch(e => console.log(e))
    }

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
                    overflow: 'auto',
                    padding: '0 16px',
                    border: '1px solid rgba(140, 140, 140, 0.35)',
                }}
            >
                    <List
                        dataSource={data}
                        renderItem={item => (
                            <List.Item key={item.place_id}>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.icon}/>}
                                    title={<a href="https://ant.design">{item.name}</a>}
                                    description={
                                        <div>
                                            <p>Rating: {item.rating}</p>
                                            <p>Price Level: {item.price_level}</p>
                                        </div>}
                                />
                                <Button type="primary" size={'small'}>
                                    Save
                                </Button>
                            </List.Item>
                        )}
                    />
            </div>

        </div>
    );
}

export default ResultListing;
