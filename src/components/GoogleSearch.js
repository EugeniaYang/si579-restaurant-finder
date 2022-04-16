import React from 'react'
// const API_KEY='AIzaSyCPuTBdJFz2V9k_7QtyU6niWQg-irn84jk';
const API_KEY='AIzaSyBjBsffMVnkwVe7AfZmca47IU5XLA3OQfE';
export default class GoogleSearch extends React.Component {

    state = {
        hasLocationPermission: true,
        latitude:42.280661373579385,
        longitude:-83.74013801578548,
        restaurantList: []
    }

    handleRestaurantSearch = () => {
        console.log("here")
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const url  = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
        const location = `location=${this.state.latitude},${this.state.longitude}`;
        const radius = '&radius=2000';
        const type = '&keyword=restaurant';
        const key = '&key='+API_KEY;
        const restaurantSearchUrl = url + location + radius + type + key;
        fetch(proxyUrl+restaurantSearchUrl)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                this.setState({restaurantList: result})
            })
            .catch( e => console.log(e))
    }

    render() {
        console.log(this.state.restaurantList.results)
        return (
            <button onClick={this.handleRestaurantSearch}>Click</button>
        );
    }
}