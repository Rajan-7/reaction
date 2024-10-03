import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieDetails: {},
  reviews: [],
};

const movieDetailSlice = createSlice({
  name: "movieDetails",
  initialState: initialState,
  reducers: {
    setMovieDetails: (state, actions) => {
      state.movieDetails = actions.payload;
    },
    setReviews: (state, actions) => {
      state.reviews = actions.payload
    },
    addReviews: (state, actions) => {
      state.reviews = [...state.reviews, actions.payload];
    },
  },
});
export default movieDetailSlice.reducer;
export const { addReviews, setReviews, setMovieDetails } =
  movieDetailSlice.actions;
// export const getMovieDetails = (state) => state.movieDetails.movieDetails;
export const getReviews = (state) => state.movieDetails.reviews;
export const getMovies = (state) => state.movieDetails.movieDetails;
