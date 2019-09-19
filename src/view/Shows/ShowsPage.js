import React, { Component, Suspense } from 'react'
import _ from 'lodash'

import { showService } from '../../services/ShowService'

import Loader from '../components/Loader/Loader'
import SearchBar from '../components/SearchBar'

import ShowsGrid from './ShowsGrid'

class ShowsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shows: [],
            filteredShows: []
        }
    }

    async componentDidMount() {
        try {
            const shows = await showService.fetchPopularShows()
            this.setState({ shows, filteredShows: shows })
        } catch (error) {
            throw new Error(error.message)
        }
    }

    searchShows = (searchText, users) => {
        const allShows = users || this.state.shows

        const filteredShows = allShows.filter(show => {
            const { name } = show
            return _.toLower(name).includes(_.toLower(searchText))
        })

        this.setState({ filteredShows })
    }

    render() {
        const { filteredShows, shows } = this.state
        return (
            <>
                {!_.isEmpty(shows) && (
                    <Suspense fallback={<Loader isLoading />}>
                        <SearchBar onSearch={this.searchShows} />
                        <ShowsGrid shows={filteredShows} />
                    </Suspense>
                )}
            </>
        )
    }
}

export default ShowsPage
