import React from 'react';
import './css/searchBar.css';
import { Button } from 'react-bootstrap';

class SearchBar extends React.Component{
    render() {
        return(
            
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Search : 
                    <input type="text" />
                    </label>
                    <Button variant="outline-danger" onClick={() => this.navigation}>Go</Button>{' '}
                </form>

            
        );
    }
}

export default SearchBar;