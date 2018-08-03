import React, { Component } from 'react'
import _ from 'lodash'

import { showService } from '../../services/ShowService'

import ShowsGrid from './ShowsGrid'
import Loader from './../partials/Loader/Loader'

class ShowsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shows: []
        }
    }

    componentDidMount() {
        showService
            .fetchPopularShows()
            .then(shows => {
                this.setState({ shows })
            })
            .catch(error => {
                throw new Error(error.message)
            })
    }

    render() {
        const { shows } = this.state
        return (
            <Loader isLoading={_.isEmpty(shows)}>
                <ShowsGrid shows={shows} />
            </Loader>
        )
    }
}

export default ShowsPage
