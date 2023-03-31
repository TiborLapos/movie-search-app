import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Movie_Search from '../Home/Movie_Search'




function Cards() {
  const { id } = useParams();
  const [movie, setMovie] = useState({
    Title: "",
    Year: "",
    imdbRating: ""
  });

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=fa90d556`);
      const data = await response.json();
      setMovie(data);
    }

    fetchMovie();
  }, [id]);
  

  // Use the `id` value to fetch data, render components, etc.
  if (!movie) {
    return <div>Loading...</div>;
  }
  return (
    <>
    <div>
      <h1>{id}</h1>
      <h1>{movie.Title}</h1>
      <p>Year: {movie.Year}</p>
      <p>IMDB Rating: {movie.imdbRating}</p>
   </div>
    </>

  );
}

export default Cards;
