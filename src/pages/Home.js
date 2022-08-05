import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../store/movieSlice';
export default function Home() {
  const movies = useSelector((store) => store.movies);
  const dispatch = useDispatch(fetchMovies);
  // console.log(dispatch);
  const [isLoaded, setLoaded] = useState(false);
  // useEffect(() => {
  //   if (!isLoaded) {
  //     dispatch(fetchMovies());
  //     setLoaded(true);
  //   }
  // }, []);
  // console.log(movies);
  return (
    <div>
      <h1>
        {movies.map((item) => {
          return <div>{item.title}</div>;
        })}
      </h1>
    </div>
  );
}
