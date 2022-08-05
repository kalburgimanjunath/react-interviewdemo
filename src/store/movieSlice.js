import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  likes: 0,
  bookmarks: false,
  error: null,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    movieAdded: {
      reducer(state, action) {
        state.movies.push(action.payload);
      },
    },
    reactionAdded(state, action) {
      const { movieId, reaction } = action.payload;
      const existingMovie = state.movies.find((movie) => movie.id === movieId);
      if (existingMovie) {
        existingMovie.reactions[reaction]++;
      }
    },
    movieUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingMovie = state.movies.find((movie) => movie.id === id);
      if (existingMovie) {
        existingMovie.title = title;
        existingMovie.content = content;
      }
    },
    addLikes: {
      reducer(state, action) {
        state.likes += state.likes;
      },
    },
    addBookmarks: {
      reducer(state, action) {
        state.bookmarks = true;
      },
    },
  },
  extraReducers(builder) {
    // omit posts loading reducers
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      // We can directly add the new post object to our posts array
      state.movies.push(action.payload);
    });
  },
});
export const fetchMovies = createAsyncThunk('movie/fetchMovies', async () => {
  const response = await fetch(
    'https://api.themoviedb.org/3/movie/upcoming?api_key=f50ad22f53d646b27b4d58e0ab474f3b&language=en-US&page=1'
  )
    .then((res) => res.json())
    .then((result) => {
      //console.log(result.results);
      return result;
    });
  return response.results;
});
export const {
  movieAdded,
  movieUpdated,
  reactionAdded,
  addBookmarks,
  addLikes,
} = movieSlice.actions;

export default movieSlice.reducer;

export const selectAllMovies = (state) => state.movies.movies;

export const selectMovieById = (state, movieId) =>
  state.movies.movies.find((movie) => movie.id === movieId);
