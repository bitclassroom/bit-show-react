import React from 'react'

import Loader from '../../partials/Loader/Loader'
import ActorCard from './ActorCard'

const CastList = ({ casts }) => {
    if (!casts) {
        return <Loader />
    }

    const castList = casts.map(actor => <ActorCard actor={actor} />)

    return (
        <div className="row">
            <h4>Actors</h4>
            {castList}
        </div>
    )
}

export default CastList
