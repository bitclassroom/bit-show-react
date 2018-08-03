import React from 'react'

import Loader from '../../partials/Loader/Loader'
import ActorCard from './ActorCard'
import ActorListItem from './ActorListItem'

export const CastGrid = ({ casts }) => {
    const castGrid = casts.map(actor => <ActorCard actor={actor} />)

    return <div className="row">{castGrid}</div>
}

export const CastList = ({ casts }) => {
    const castList = casts.map(actor => <ActorListItem actor={actor} />)

    return (
        <div className="row">
            <ul class="collection">{castList}</ul>
        </div>
    )
}

export const CastView = ({ casts, isGrid }) => {
    if (!casts) {
        return <Loader />
    }

    return isGrid ? <CastGrid casts={casts} /> : <CastList casts={casts} />
}

export default CastView
