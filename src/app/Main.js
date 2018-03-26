import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ShowsPage from './shows/ShowsPage'
import ShowDetailsPage from './shows/details/ShowDetailsPage'

const Main = () => (
    <main className="container">
        <Switch>
            <Route exact path="/" component={ShowsPage} />
            <Route path="/show/:id" component={ShowDetailsPage} />
        </Switch>
    </main>
)

export default Main
