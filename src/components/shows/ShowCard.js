import React from 'react'

const ShowCard = ({ show }) => (
    <div class="col s12 m3">
        <div class="card hoverable">
            <div class="card-image">
                <img src={show.image.medium} alt="" />
                <a class="btn-floating btn-large halfway-fab blue ">{show.rating}</a>
            </div>
            <div class="card-content">
                <span class="card-title grey-text text-darken-4 truncate">{show.name}</span>
            </div>
        </div>
    </div>
)

export default ShowCard
