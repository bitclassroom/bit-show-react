import React from 'react'

const CastItem = ({ cast }) => {
    console.log(cast)
    return (
        <div class="col s12 m2">
            <div class="card">
                <div class="card-image">
                    <img className="z-depth-2" src={cast.photo} alt="" />
                    {/* <h5 >{cast.name}</h5> */}
                    <span class="card-title">{cast.name}</span>
                </div>
            </div>
        </div>
    )
}

const CastList = ({ casts }) => {
    if (!casts) {
        return <p>Loading...</p>
    }

    const castList = casts.map(cast => <CastItem cast={cast} />)

    return (
        <div className="row">
            <h4>CAST</h4>
            {castList}
        </div>
    )
}

export default CastList
