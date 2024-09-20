import './style.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { imgPath } from '../../Constant/imgPath.js';
import { Link } from 'react-router-dom';
function Home() {
    const [movies, setMovies] = useState([])
    const [people, setPeople] = useState([])
    const [tv, setTv] = useState([])
    function getData(type,callback){
        axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=a6e2bf483f77cb93284f7490fce470cc`)
        .then((res)=>{
            // console.log(res.data.results);
            callback(res.data.results)
        }).catch((err)=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        getData('movie',setMovies);
        getData('person',setPeople);
        getData('tv',setTv);
    },[])
    return ( <>
        <div className="row my-5">
        <div className="col-md-4 d-flex align-items-center">
            <div>
                <div className='brdr w-25'></div>
                <h1 className="title">Trending <br />Movies <br />To watch right now</h1>
                <p className="titleHome">Top Trending Movies By Day</p>
                <div className='brdr w-100'></div>
            </div>
        </div>
        {movies.slice(0,10).map((movie)=>(
            <div key={movie.id} className="col-md-2">
                <Link>
                    <div className="w-100">
                        <img className="w-100" src={imgPath(movie.poster_path)} alt="movie" />
                        <h4 className="text-truncate" data-toggle="tooltip" data-placement="bottom" title={movie.title?movie.title:movie.original_title}>{movie.title?movie.title:movie.original_title}</h4>
                    </div>
                </Link>
            </div>
        ))}
    </div>
    <hr />
    <div className="row my-5">
        <div className="col-md-4 d-flex align-items-center">
            <div>
                <div className='brdr w-25'></div>
                <h1 className="title">Trending <br />People <br />To watch right now</h1>
                <p className="titleHome">Top Trending People By Day</p>
                <div className='brdr w-100'></div>
            </div>
        </div>
        {people.slice(0,10).map((person)=>(
            <div key={person.id} className="col-md-2">
                <div className="w-100">
                    <img className="w-100" src={imgPath(person.profile_path)} alt="person" />
                    <h4 className="text-truncate" data-toggle="tooltip" data-placement="bottom" title={person.name?person.name:person.original_name}>{person.name?person.name:person.original_name}</h4>
                </div>
            </div>
        ))}
    </div>
    <hr />
    <div className="row my-5">
        <div className="col-md-4 d-flex align-items-center">
            <div>
                <div className='brdr w-25'></div>
                <h1 className="title">Trending <br />Tv <br />To watch right now</h1>
                <p className="titleHome">Top Trending Tv By Day</p>
                <div className='brdr w-100'></div>
            </div>
        </div>
        {tv.slice(0,10).map((tv)=>(
            <div key={tv.id} className="col-md-2">
                <div className="w-100">
                    <img className="w-100" src={imgPath(tv.poster_path)} alt="tv" />
                    <h4 className="text-truncate" data-toggle="tooltip" data-placement="bottom" title={tv.name?tv.name:tv.original_name}>{tv.name?tv.name:tv.original_name}</h4>
                </div>
            </div>
        ))}
    </div>
    </>
    );
}

export default Home;