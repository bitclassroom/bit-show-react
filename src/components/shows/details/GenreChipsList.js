import React from 'react'

const GenreChipsList = ({ genres = [] }) => {
    return genres.map(genre => <div className="card chip">{genre}</div>)
}

export default GenreChipsList
