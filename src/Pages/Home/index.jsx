import './style.css'
import MovieCard from '../../components/MovieCard/index.jsx';
import PeopleCard from '../../components/PeopleCard/index.jsx';
import TvCard from '../../components/TvCard/index.jsx';
import { useContext } from 'react';
import { Context } from '../../components/Store/index.jsx';
import Loading from '../../components/Loading/index.jsx';
import { Link } from 'react-router-dom';
function Home() {
    const {movies,people,tv} = useContext(Context);
    return ( <>
        {movies!=null&&people!=null&tv!=null?<><div className="row my-5">
        <div className="col-md-4 d-flex align-items-center">
            <div>
                <div className='brdr w-25'></div>
                <h1 className="title">Trending <br />Movies <br />To watch right now</h1>
                <Link to={'/movies'}>
                    <p className="titleHome">Top Trending Movies By Day</p>
                </Link>
                <div className='brdr w-100'></div>
            </div>
        </div>
        {movies.slice(0,10).map((movie)=>(
            <MovieCard key={movie.id} movie={movie}/>
        ))}
    </div>
    <hr />
    <div className="row my-5">
        <div className="col-md-4 d-flex align-items-center">
            <div>
                <div className='brdr w-25'></div>
                <h1 className="title">Trending <br />People <br />To watch right now</h1>
                <Link to={'/people'}>
                    <p className="titleHome">Top Trending People By Day</p>
                </Link>
                <div className='brdr w-100'></div>
            </div>
        </div>
        {people.slice(0,10).map((person)=>(
            <PeopleCard  key={person.id} person={person}/>
        ))}
    </div>
    <hr />
    <div className="row my-5">
        <div className="col-md-4 d-flex align-items-center">
            <div>
                <div className='brdr w-25'></div>
                <h1 className="title">Trending <br />Tv <br />To watch right now</h1>
                <Link to={'/tv'}>
                    <p className="titleHome">Top Trending Tv By Day</p>
                </Link>
                <div className='brdr w-100'></div>
            </div>
        </div>
        {tv.slice(0,10).map((tv)=>(
            <TvCard  key={tv.id} tv={tv}/>

        ))}
    </div></>:<Loading/>}
    </>
    );
}

export default Home;