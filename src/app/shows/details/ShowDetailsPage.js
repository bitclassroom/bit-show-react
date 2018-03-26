import React, { Component } from 'react'
import { showService } from '../../../services/ShowService'
import GenreChipsList from './GenreChipsList'
import CastList from './CastList'
import _ from 'lodash'

class ShowDetailsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: null
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params
        showService.fetchSingleShow(id).then(show => {
            console.log(show)
            this.setState({ show })
        })
    }

    render() {
        const { show } = this.state

        if (_.isEmpty(show)) {
            return <p>Loading...</p>
        }

        const { name, image, desc, genres, casts } = show
        return (
            <div className="row">
                <br />
                <br />
                <div className="col s5">
                    <div className="card">
                        <div className="card-image">
                            <img src={image.medium} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col s6 offset-s1">
                    <h3>{name.toUpperCase()}</h3>
                    <br />
                    <GenreChipsList items={genres} />
                    <p class="flow-text">{desc}</p>
                </div>
                <div className="col s12">
                    <hr />
                    <CastList casts={casts} />
                </div>
            </div>
        )
    }
}

export default ShowDetailsPage
