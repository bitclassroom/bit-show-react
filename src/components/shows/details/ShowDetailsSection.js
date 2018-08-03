import React from 'react'
import GenreChipsList from './GenreChipsList'

const ShowDetailsSection = ({ name, image, desc, genres }) => (
    <React.Fragment>
        <br />
        <br />
        <div className="col s5">
            <div className="card">
                <div className="card-image">
                    <img src={image.medium} alt="" />
                </div>
            </div>
        </div>
        <div className="col s6 offset-s1">
            <h3>{name.toUpperCase()}</h3>
            <br />
            <GenreChipsList genres={genres} />
            <p className="flow-text">{desc}</p>
        </div>
    </React.Fragment>
)

export default ShowDetailsSection
