import React from 'react'
import { Link } from 'react-router-dom'
import { imgPath } from '../../Constant/imgPath'

export default function MovieCard({ movie }) {
    return (
        <div className="col-md-2">
            <Link to={`/movie/${movie.id}`}>
                <div className="w-100">
                    <img className="w-100" src={imgPath(movie.poster_path)} alt="movie" />
                    <h4 className="text-truncate" data-toggle="tooltip" data-placement="bottom" title={movie.title ? movie.title : movie.original_title}>{movie.title ? movie.title : movie.original_title}</h4>
                </div>
            </Link>
        </div>
    )
}
