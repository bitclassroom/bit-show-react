import React, { Component } from 'react'
import ShowsGrid from './ShowsGrid'
import Loader from './../partials/Loader/Loader'
import { showService } from '../../services/ShowService'
import _ from 'lodash'

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
                throw new Error('')
            })
    }

    render() {
        const { shows } = this.state

        if (_.isEmpty(shows)) {
            return <Loader />
        }

        return <ShowsGrid shows={shows} />
    }
}

export default ShowsPage
