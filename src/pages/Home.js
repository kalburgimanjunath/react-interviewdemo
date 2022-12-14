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
      console.log(item);
      return (
        <div style={{ padding: 10 }} className="videoContainer">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
              size={300}
              width="300"
            />
          </div>
          <a href={`./details/${item.id}`}>{item.original_title}</a>
          <div className="movie-detail">
            <p>{item.overview}</p>
            <div>
              Rating:{item.vote_average},Likes:{item.vote_count}
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <div style={{ display: 'flex' }}>
        {movies[0] ? <MovieList movies={movies[0]} /> : null}
      </div>
    </div>
  );
}
