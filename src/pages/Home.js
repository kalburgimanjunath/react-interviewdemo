import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../store/movieSlice';
// import { Link } from 'react-router-dom';
export default function Home() {
  const movies = useSelector((store) => store.movies);
  const dispatch = useDispatch();
  // console.log(dispatch);

  const [isLoaded, setLoaded] = useState(false);

  const MovieList = ({ movies }) => {
    return movies.map((item) => {
      return (
        <div>
          <a href={`./details/${item.id}`}>{item.title}</a>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Home</h1>
      {movies[0] ? <MovieList movies={movies[0]} /> : null}
    </div>
  );
}
