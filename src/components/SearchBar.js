import React from 'react';
import { Input } from 'antd';
// import Autocomplete from "react-google-autocomplete";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
const onSearch = value => console.log(value);
const { Search } = Input;

const API_KEY='AIzaSyCPuTBdJFz2V9k_7QtyU6niWQg-irn84jk';
function SearchBar() {
    return (
        <div className="SearchBar">
            {/*<Search placeholder="input search text" onSearch={onSearch} enterButton />*/}
            {/*<GooglePlacesAutocomplete apiKey={API_KEY} />*/}
        </div>
    );
}

export default SearchBar;
