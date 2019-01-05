import React, { Component } from 'react';

class Restapi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }
    componentDidMount() {
      
       console.log('componentDidMount');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json
                })
            });
           
    }
    render() {
      console.log('render');
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        return (
            <div >
               <h1>Bluebaney Json</h1>
               
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            id:{item.id}  Name: {item.name} | Email: {item.email} | street: {item.address.street}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
export default Restapi;
