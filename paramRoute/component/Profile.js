import React, { Component } from 'react'
import axios from 'axios'


export default class Profile extends Component {
    state = {
        data: {

        }
    }
    componentDidMount() {
        const data = this.props.match.params.profileId
        const profile = {
            id: 7, 
            title: "test de titre"
        }

        /*         fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((json) => console.log(json));
                } */
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({ data: response.data[data]})
            }).catch((error) => {
                this.setState({ 
                    data: profile
                })
            })
    }

    render() {
        return (
            <div className="container mt-3">
                <h1>Profile</h1>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Id : {this.state.data.id} </li>
                    <li className="list-group-item">titre : {this.state.data.title} </li>
                </ul>
            </div>
        )
    }
}
