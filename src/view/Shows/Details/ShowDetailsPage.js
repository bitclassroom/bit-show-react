import React, { useEffect, useState, Suspense } from 'react'
import _ from 'lodash'

import { showService } from '../../../services/ShowService'

import Loader from '../../components/Loader/Loader'

import ShowDetailsSection from './ShowDetailsSection'

const CastSection = React.lazy(() => import('./CastSection'))

const useToggle = (init = false) => {
    const [on, setOn] = useState(init)
    const toggle = () => setOn(!on)
    return [on, toggle]
}

const ShowDetailsPage = props => {
    const { match } = props
    const [showCast, toggleCast] = useToggle()
    const [show, setShow] = useState(null)

    useEffect(() => {
        void (async () => {
            const { id } = match.params
            const show = await showService.fetchSingleShow(id)

            setShow(show)
        })()
    }, [match.params])

    if (_.isEmpty(show)) {
        return <Loader isLoading />
    }

    const { casts } = show

    return (
        <div className="row">
            <ShowDetailsSection show={show} />
            <div className="switch">
                <label>
                    Display cast section
                    <input type="checkbox" checked={showCast} onChange={toggleCast} />
                    <span className="lever"></span>
                </label>
            </div>
            {showCast && (
                <Suspense fallback={<div>Loading...</div>}>
                    <CastSection casts={casts} />
                </Suspense>
            )}
        </div>
    )
}

export default ShowDetailsPage
