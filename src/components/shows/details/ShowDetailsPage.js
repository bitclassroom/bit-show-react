import React, { Component } from 'react'
import _ from 'lodash'

import { showService } from '../../../services/ShowService'

import CastList from './CastList'
import GenreChipsList from './GenreChipsList'
import Loader from '../../partials/Loader/Loader'

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
            this.setState({ show })
        })
    }

    render() {
        const { show } = this.state

        if (_.isEmpty(show)) {
            return <Loader isLoading />
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
                    <GenreChipsList genres={genres} />
                    <p className="flow-text">{desc}</p>
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
