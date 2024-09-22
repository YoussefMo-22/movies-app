import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { imgPath } from '../../Constant/imgPath'
import { useLocation, useParams } from 'react-router-dom'
import Loading from '../../components/Loading'

export default function DetailsTv() {
    const [details, setDetails] = useState(null)
    const { id } = useParams();
    let type = useLocation().pathname.includes('tv')&&'tv';
    function getDetails() {
        axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=a6e2bf483f77cb93284f7490fce470cc`)
            .then((res) => {
                setDetails(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        getDetails();
    },[])
    return (
        <>
            {details != null ?
                <div className='row'>
                    <div className="col-md-3">
                        <div className="w-100">
                            <img className='w-100' src={imgPath(details?.poster_path)} alt='tv' />
                        </div>
                    </div>
                    <div className="col-md-8 offset-1">
                        <h1 className='fs-1 fw-bolder'>{details?.name}</h1>
                        <p>{details?.overview}</p>
                        <p><span className='fw-bold'>Genres:</span> {details?.genres.map((item,i)=>details?.genres[i].name).join(' , ')}</p>
                        <p><span className='fw-bold'>Spoken Languages:</span> {details?.spoken_languages.map((item,i)=>details?.spoken_languages[i].english_name).join(' , ')}</p>
                        <p><span className='fw-bold'>Origin Country:</span> {details?.origin_country.map((item,i)=>details?.origin_country[i]).join(' , ')}</p>
                        <p><span className='fw-bold'>Production Companies:</span> {details?.production_companies.map((item,i)=>details?.production_companies[i].name).join(' , ')}</p>
                        <p><span className='fw-bold'>First Air Date:</span> {details?.first_air_date}</p>
                        <p><span className='fw-bold'>Last Air Date:</span> {details?.last_air_date}</p>
                        <p><span className='fw-bold'>Seasons:</span> {details?.number_of_seasons}</p>
                        <p><span className='fw-bold'>Episodes:</span> {details?.number_of_episodes}</p>
                        <p><span className='fw-bold'>Home Page:</span> <a href={details?.homepage}>{details?.homepage}</a></p>
                        <img className='w-75 my-2' src={imgPath(details?.backdrop_path)} alt='movie' />
                    </div>
                </div> : <Loading />}
        </>
    )
}
