import React, {Component} from "react";
import {Link} from "react-router-dom";

class ShowsList extends Component {
    renderCard(show) {
        return (
            <div className="col s12 m4" key={show}>
                <div className="card">
                    <div className="card-image">
                        <img src="https://goo.gl/SZTN5q" alt="" />
                        <span className="card-title">{show}</span>
                    </div>
                    <div className="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                        <Link to={`/show/${show}`}>See More</Link>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="row" style={{marginTop: "20px"}}>
                { this.props.shows.map((show) => this.renderCard(show)) }
            </div>
        );
    }
}

export default ShowsList;