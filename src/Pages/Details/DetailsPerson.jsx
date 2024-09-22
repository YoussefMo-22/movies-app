import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { imgPath } from '../../Constant/imgPath'
import { useLocation, useParams } from 'react-router-dom'
import Loading from '../../components/Loading'
import personImg from '../../Assets/profileImg.jpg'


export default function DetailsPerson() {
    const [details, setDetails] = useState(null)
    const { id } = useParams();
    let type = useLocation().pathname.includes('person')&&'person';
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
    }, [])
    
    return (
        <>
            {details != null ?
                <div className='row'>
                    <div className="col-md-3">
                        <div className="w-100">
                        <img className="w-100" src={details?.profile_path?imgPath(details.profile_path):personImg} alt="person" />
                        </div>
                    </div>
                    <div className="col-md-8 offset-1">
                        <h1 className='fs-1 fw-bolder'>{details?.name}</h1>
                        <p><span className='fw-bold'>Known For:</span> {details?.known_for_department}</p>
                        <p><span className='fw-bold'>Birth Date:</span> {details?.birthday}</p>
                        {details?.deathday!=null?(<p><span className='fw-bold'>Death Date:</span> {details?.deathday}</p>):<></>}
                        <p><span className='fw-bold'>Place of Birth:</span> {details?.place_of_birth}</p>
                        <p><span className='fw-bold'>Gender:</span> {details?.gender==1?'Female':'Male'}</p>
                        <p><span className='fs-3 fw-bold'>Bio:</span> <br />{details?.biography}</p>
                    </div>
                </div> : <Loading />}
        </>
    )
}
