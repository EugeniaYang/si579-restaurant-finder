import React from 'react';
import { Input } from 'antd';

const onSearch = value => console.log(value);
const { Search } = Input;

const API_KEY='AIzaSyCPuTBdJFz2V9k_7QtyU6niWQg-irn84jk';
function SearchBar() {
    var axios = require('axios');

    var config = {
        method: 'get',
        url: 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=amoeba&types=establishment&location=37.76999%2C-122.44696&radius=500&key='+API_KEY,
        headers: { }
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

    return (
        <div className="SearchBar">
            <Search placeholder="input search text" onSearch={onSearch} enterButton />
        </div>
    );
}

export default SearchBar;
