import React, {Component} from "react";

import ShowList from "./ShowsList";

class HomePage extends Component {
    constructor (props) {
        super(props);
        this.state = this.getInitState();
    }

    getInitState() {
        return {
            shows: [1, 2, 3, 5, 6, 32, 54, 23, 34]
        }
    }

    render() {
        return (
            <div className="container">
                <ShowList shows={this.state.shows}/>
            </div>
        );
    }
}

export default HomePage;