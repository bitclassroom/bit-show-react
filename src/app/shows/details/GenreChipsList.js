import React from 'react'

const GenreChipsList = ({ items = [] }) => {
    return items.map(item => <div class="card chip">{item}</div>)
}

export default GenreChipsList
