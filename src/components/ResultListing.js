import React, {useState, useEffect} from 'react';
import {List, message, Avatar, Skeleton, Divider} from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';


// const API_KEY = 'AIzaSyCPuTBdJFz2V9k_7QtyU6niWQg-irn84jk';
const API_KEY='AIzaSyBjBsffMVnkwVe7AfZmca47IU5XLA3OQfE';
function ResultListing() {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [restaurantList, setRestaurantList] = useState([])
    const center = {//north quad
        lat: 42.280661373579385,
        lng: -83.74013801578548
    };

    const handleRestaurantSearch = () => {
        console.log("here")
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
        const location = `location=${center.lat},${center.lng}`;
        const radius = '&radius=2000';
        const type = '&keyword=restaurant';
        const key = '&key=' + API_KEY;
        const restaurantSearchUrl = url + location + radius + type + key;
        fetch(proxyUrl + restaurantSearchUrl)
            .then(response => response.json())
            .then(body => {
                setData([...data, ...body.results]);
            })
            .then(result => {
                console.log(result)
                setRestaurantList(result)
            })
            .catch(e => console.log(e))
    }

    async function loadMoreData (){
        if (loading) {
            return;
        }
        setLoading(true);
        await handleRestaurantSearch()
        setLoading(false)
        // fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
        //     .then(res => res.json())
        //     .then(body => {
        //         setData([...data, ...body.results]);
        //         setLoading(false);
        //     })
        //     .catch(() => {
        //         setLoading(false);
        //     });
    }

    // useEffect(() => {
    //     loadMoreData().then(r => );
    // }, []);

    return (
        <div className="ResultListing">
            <div
                id="scrollableDiv"
                style={{
                    height: 800,
                    overflow: 'auto',
                    padding: '0 16px',
                    border: '1px solid rgba(140, 140, 140, 0.35)',
                }}
            >
                <InfiniteScroll
                    dataLength={data.length}
                    next={loadMoreData}
                    hasMore={data.length < 50}
                    loader={<Skeleton avatar paragraph={{rows: 1}} active/>}
                    endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                    scrollableTarget="scrollableDiv"
                >
                    <List
                        dataSource={data}
                        renderItem={item => (
                            <List.Item key={item.id}>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.picture.large}/>}
                                    title={<a href="https://ant.design">{item.name.last}</a>}
                                    description={item.email}
                                />
                                <div>Content</div>
                            </List.Item>
                        )}
                    />
                </InfiniteScroll>
            </div>

        </div>
    );
}

export default ResultListing;
