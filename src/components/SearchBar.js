import React from 'react';

import { Input } from 'antd';
const onSearch = value => console.log(value);
const { Search } = Input;
function SearchBar() {



    return (
        <div className="SearchBar">
            <Search placeholder="input search text" onSearch={onSearch} enterButton />
        </div>
    );
}

export default SearchBar;
