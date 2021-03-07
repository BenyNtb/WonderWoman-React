import React from 'react';
import { Button } from 'react-bootstrap';
import SearchBar from './SearchBar';
import './css/navigation.css';

class Navigation extends React.Component {

    navigation = (destination) => {
        console.log("Navigation vers " + destination);
    }
    render() {
        return (
            <nav>
                <Button variant="outline-danger" onClick={() => this.navigation}>Wonder Woman</Button>{' '}
                <Button variant="outline-warning" onClick={() => this.navigation}>1984</Button>{' '}
                <div className="navRight">
                    <SearchBar/>
                </div>
            </nav>
        )
    }
}

export default Navigation;