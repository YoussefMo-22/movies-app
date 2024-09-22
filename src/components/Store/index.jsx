import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let Context = createContext(0);

export function ContextProvider(props){
    const [movies, setMovies] = useState([]);
    const [people, setPeople] = useState([]);
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
        getdata('movie',setMovies);
    },[page])
    useEffect(()=>{
        getdata('person',setPeople);
        getdata('tv',setTv);
    },[])

    return(
        <Context.Provider value={{movies,people,tv,setPage}}>
            {props.children}
        </Context.Provider>
    )
}