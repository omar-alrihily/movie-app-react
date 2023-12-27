import { useEffect, useState} from 'react'


import MovieCard from './MovieCard'
import './App.css'



import SearchIcon from './search.svg' ;





// Api key : 7c240aa8

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=7c240aa8' ;

/*

const movie1 = {
    "Title": "Superman Returns",
    "Year": "2006",
    "imdbID": "tt0348150",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
}

*/

function App() {

   const  [movies, setMovies] = useState([]); 
   const [searchTerm , setSearchTerm] = useState('') ;



   const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };



 
    useEffect(()=>{

        searchMovies();


    },[]);
  return (
    <div className='app'>

  


<h1>Omar Movies</h1>

<div className='search'>

    <input placeholder='search for movies' 
    value= {searchTerm}
    onChange={ (e)=> setSearchTerm(e.target.value) }   
     />

<img
     src={SearchIcon}
     alt='search'
     onClick={() => searchMovies(searchTerm)}
    
     />

</div>

{

    movies?.length > 0 
    ? (
         
        <div className='container'>


    {movies.map((movie)=>
    <MovieCard movie={movie} />
    )}


</div>   
    )  :

    (

        <div className='empty' >

            <h2>No movies found </h2>
        </div>
    )
}



    </div>
  )
}

export default App