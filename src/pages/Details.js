import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, selectMovieById } from '../store/movieSlice';
import { Link, useParams } from 'react-router-dom';
export default function Details() {
  const [moviedetail, setDetail] = useState();
  const movies = useSelector((store) => store.movies);
  const dispatch = useDispatch();
  const { id } = useParams();

  const [isLoaded, setLoaded] = useState(false);

  if (movies[0] && !isLoaded) {
    const movieItem = selectMovieById(movies[0], id);
    // setDetail(movieItem);
    // console.log(movieItem);
  }

  const MovieList = ({ movies }) => {
    return movies.map((item) => {
      return (
        <div>
          <Link to={`/details/${item.id}`}>{item.title}</Link>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Details:{id}</h1>
      {moviedetail ? <div>{moviedetail.title}</div> : null}
    </div>
  );
}
