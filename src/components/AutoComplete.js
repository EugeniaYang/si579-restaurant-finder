import React, {useEffect, useState} from 'react';
import {AutoComplete, Input} from 'antd';

let predictions=[];
function mockVal(str) {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    return fetch(proxyurl + 'https://maps.googleapis.com/maps/api/place/autocomplete/json?' +
        'input=' + str +
        '&key=AIzaSyCPuTBdJFz2V9k_7QtyU6niWQg-irn84jk', {mode: 'cors', headers: {'Access-Control-Allow-Origin': "*"}})
        .then(response => response.json())
        .then((data) => {
            console.log(data['predictions']);
            predictions=data['predictions'];
            return data['predictions'];
        }).catch((err) => {
            console.log(err);
        });
}

const Complete = () => {
        const [value, setValue] = useState('');
        const [options, setOptions] = useState([]);
        // const [predictions, setPredictions] = useState([]);
        const onSearch = (searchText) => {
                mockVal(searchText).then(r => {
                    // setPredictions(r)
                    // console.log(r)
                    // console.log(Object.assign({}, r.map((x) => ({value: x.description}))))
                    let results=r.map((x) => ({value: x.description}));
                    setOptions(
                        !searchText ? [] : results,
                    );
                    console.log(options)
                });
            }
        ;
        const onSelect = (data) => {
            console.log('onSelect', data);
        };

        const onChange = (data) => {
            setValue(data);
        };

        return (
            <>
                <br/>
                <br/>
                <AutoComplete
                    value={value}
                    options={options}
                    style={{
                        width: '100%',
                    }}
                    onSelect={onSelect}
                    onSearch={onSearch}
                    onChange={onChange}
                    >
                    <Input.Search size="large" placeholder="input here" enterButton/>
                </AutoComplete>
                <p>Sometimes the autofill does not work because we are using a proxy. Please try again later.</p>
            </>
        );
    }
;

export default Complete;