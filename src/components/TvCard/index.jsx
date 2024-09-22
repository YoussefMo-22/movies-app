import React from 'react'
import { Link } from 'react-router-dom'
import { imgPath } from '../../Constant/imgPath'

export default function TvCard({ tv }) {
    return (
        <div className="col-md-2">
            <Link to={`/tv/${tv.id}`}>
                <div className="w-100">
                    <img className="w-100" src={imgPath(tv.poster_path)} alt="tv" />
                    <h4 className="text-truncate" data-toggle="tooltip" data-placement="bottom" title={tv.name ? tv.name : tv.original_name}>{tv.name ? tv.name : tv.original_name}</h4>
                </div>
            </Link>
        </div>
    )
}
