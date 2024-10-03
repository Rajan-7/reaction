import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
// const BASE_URL = "https://api.themoviedb.org/3";
import {
  setReviews,
  getReviews,
  addReviews,
  setMovieDetails,
  getMovies,
} from "../redux/movieDetailSlice";

const Moviestatus = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const movieInfo = useSelector(getMovies);
  const review = useSelector(getReviews);
  const [author, setAuthor] = useState("");
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState("");
  // const [movieInfo, setMovieInfo] = useState([]);
  // const [review, setReview] = useState();

  const submitReview = (e) => {
    e.preventDefault();
    const updateReview = {
      author: author,
      author_details: {
        username: username,
        rating: rating,
      },
      content: content,
    };
    dispatch(addReviews(updateReview));
    // console.log("This is upddated review", updateReview);
  };

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${process.env.REACT_APP_API_KEYS}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        console.log(data);
        // setMovieInfo(data);
        dispatch(setMovieDetails(data));

        const review = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1&api_key=${process.env.REACT_APP_API_KEYS}`
        );
        const reviewData = await review.json();
        // setReview(reviewData.results);
        dispatch(setReviews(reviewData.results));
        console.log("Review Data");
        console.log(reviewData.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    loadMovies();
  }, [dispatch, id]);

  const ratingPoster = useCallback(async () => {
    // let ratingvalue = document.getElementById("Rating").value;
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/rating`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json;charset=utf-8",
          Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
        },
        // body: `{"Value":${ratingvalue}}`,
      }
    );
    const data = await response.json();
    console.log("MovieStatus:", data);
  });

  console.log("reveiws-test", review);

  return (
    <>
      <div className="container movie-details mt-5">
        <div className="row d-flex align-items-stretch g-0">
          {/* MovieInfo */}
          <div className="col-md-3">
            <div className="card bg-white h-100">
              <div className="card-image">
                <a href="#">
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movieInfo.poster_path}`}
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
              <span className="round-span">
                {Math.floor(movieInfo.vote_average)}
              </span>
              <div className="card-body text-start">
                <a href="/">
                  <span className="text-dark fw-bold">{movieInfo.title}</span>
                </a>
                <br />
                <span className="text-dark fw-light">
                  {movieInfo.release_date}
                </span>
              </div>
            </div>
          </div>
          {/* This is the Movie Description */}
          <div className="col-md-9">
            <div className="card cc bg-light d-flex h-100">
              <div className="card-body p-3">
                <h2 className="fw-light">Description</h2>
                <h4>
                  Title: <span className="fw-bold">{movieInfo.title}</span>
                </h4>
                <h5>Overview</h5>
                <p>{movieInfo.overview}</p>
                <span>Genre : </span>
                {movieInfo.genres?.map((genre, index) => (
                  <span key={genre.id}>
                    {genre.name}
                    {index < movieInfo.genres.length - 1 && ", "}
                  </span>
                ))}
                {/* <div className="d-flex align-content-center">
                  <div>
                    <span>Rating:</span>
                    <select id="Rating">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div>
                    <button onClick={ratingPoster}>Submit</button>
                  </div>
                </div> */}
                <p>
                  Runtime : <span className="fw-bold">{movieInfo.runtime}</span>{" "}
                  min
                </p>
                <span>
                  Status : <span className="fw-bold">{movieInfo.status}</span>
                </span>
                <br />
                <span>
                  VoteCount :{" "}
                  <span className="fw-bold">{movieInfo.vote_count}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Review */}
        <div className="row mt-1 mb-2">
          <div className="col-md-12">
            <div className="card bg-light">
              <div className="card-body p-3">
                <h2 className="fw-light">Reviews</h2>
                {review.length === 0 ? (
                  <p>No reviews available.</p>
                ) : (
                  review.map((rev, index) => (
                    <div key={index} className="mb-4">
                      <div className="d-flex justify-content-between">
                        <div className="d-flex flex-column">
                          {/* <img
                            src={`https://image.tmdb.org/t/p/w200${rev.author_details.avatar_path}`}
                            alt=""
                            className="rounded-circle avatar mb-1"
                          /> */}
                          <h5 className="fw-bold">{rev.author}</h5>
                        </div>
                        <p>{rev?.author_details?.rating}/10</p>
                      </div>
                      <p>{rev.content}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Rating here */}
        <form onSubmit={submitReview}>
          <h2 className="fw-light">Your Review</h2>
          <div class="form-group">
            <label for="name">Author:</label>
            <input
              type="text"
              class="form-control"
              id="name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="name">Username:</label>
            <input
              type="text"
              class="form-control"
              id="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="name">Rating(1-10)</label>
            <input
              type="number"
              class="form-control"
              id="name"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="review" class="form-label">
              Comment
            </label>
            <textarea
              class="form-control"
              id="review"
              rows="3"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Moviestatus;
