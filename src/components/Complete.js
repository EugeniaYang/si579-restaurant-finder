import React, {useEffect, useState} from 'react';
import {AutoComplete, Input} from 'antd';

const API_KEY = 'AIzaSyCPuTBdJFz2V9k_7QtyU6niWQg-irn84jk';

function mockVal(str) {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    return fetch(proxyUrl + 'https://maps.googleapis.com/maps/api/place/autocomplete/json?' +
        'input=' + str +
        '&key=' + API_KEY, {mode: 'cors', headers: {'Access-Control-Allow-Origin': "*"}})
        .then(response => response.json())
        .then((data) => {
            return data['predictions'];
        }).catch((err) => {
            console.log(err);
        });
}

const Complete = (props) => {
        const [value, setValue] = useState('');
        const [options, setOptions] = useState([]);
        const [selected, setSelected] = useState([])

        async function onSearch(searchText) {
            const r = await mockVal(searchText);
            const results = r.map((x) => ({value: x.description, key:x.place_id}));
            setOptions(
                !searchText ? [] : results,
            );
        }

        const onSelect = (val, option) => {
            props.setCenterPos(option)
            console.log('onSelect', val, option);
        };

        const onChange = (data) => {
            setValue(data);
        };

        return (
            <>
                <br/>
                <AutoComplete
                    value={value}
                    options={options}
                    style={{
                        width: '100%',
                    }}
                    onSelect={(val, option) => onSelect(val, option)}
                    onSearch={onSearch}
                    onChange={onChange}
                >
                    <Input.Search size="large" placeholder="input here" enterButton/>
                </AutoComplete>
                <p>You need to enable the function at the first time.<a href={'https://cors-anywhere.herokuapp.com/corsdemo'}>Click
                    here</a></p>
                <p>Sometimes the autofill does not work because we are using a proxy. Please try again later.</p>
                <br/>
            </>
        );
    }
;

export default Complete;