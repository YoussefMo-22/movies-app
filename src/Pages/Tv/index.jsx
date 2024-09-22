import TvCard from "../../components/TvCard";
import Loading from "../../components/Loading";
import { useEffect, useState } from "react";
import axios from "axios";

function Tv() {
    const [tv, setTv] = useState([]);
    const [page, setPage] = useState(1);

    function getdata(type,callback){
        axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=a6e2bf483f77cb93284f7490fce470cc&page=${page}`)
        .then((res)=>{
            callback(res.data.results);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        getdata('tv',setTv);
    },[page])
    let numbers = new Array(10).fill().map((item,i)=>i+1)
    return ( <>
        {tv!=null?<div className="row">
            {Array.isArray(tv)&&tv.length?(tv.map((tv)=><TvCard key={tv.id} tv={tv}/>)):<></>}
        </div>:<Loading/>}
        <nav aria-label="...">
  <ul className="pagination pagination-lg p-5 d-flex justify-content-center">
    {numbers.map((num)=>(<li key={num} className="page-item" onClick={()=>{setPage(num)}}><a style={{cursor: 'pointer'}} className="page-link bg-transparent text-white">{num}</a></li>))}
  </ul>
</nav>
    </> );
}

export default Tv;