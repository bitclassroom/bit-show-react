import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

import Loader from 'components/Loader/Loader'

const ShowsPage = lazy(() => import('./shows/ShowsPage'))
const ShowDetailsPage = lazy(() => import('./showdetails/ShowDetailsPage'))
const AboutPage = lazy(() => import('./about/AboutPage'))

const Main = () => (
    <main className="container">
        <Suspense fallback={<Loader isLoading />}>
            <Switch>
                <Route exact path="/" component={ShowsPage} />
                <Route path="/show/:id" component={ShowDetailsPage} />
                <Route path="/about" component={AboutPage} />
            </Switch>
        </Suspense>
    </main>
)

export default Main
