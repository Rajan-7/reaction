import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// const BASE_URL = "https://api.themoviedb.org/3";

const Moviestatus = () => {
  let { id } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);
  const [review, setReview] = useState([]);

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
        // console.log(data.results);
        setMovieInfo(data);
        const review = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1&api_key=${process.env.REACT_APP_API_KEYS}`
        );
        const reviewData = await review.json();
        setReview(reviewData.results);
        console.log("Review Data");
        console.log(reviewData.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    loadMovies();
  }, []);

  return (
    <>
      {/* <div className="container movie-details mt-5 d-flex">
        <div className="col-5-per-row ">
          <div className="card bg-white">
            <div className="card-image">
              <a href="#">
                <img
                  src={`https://image.tmdb.org/t/p/w200${movieInfo.poster_path}`}
                  alt=""
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
        <div className="card cc bg-light d-flex ">
          <div className="card-body p-3 ">
            <h2 className="fw-light">Description</h2>
            <h4>
              Title: <span className="fw-bold">{movieInfo.title}</span>
            </h4>
            <h5>Overview</h5>
            <p>{movieInfo.overview}</p>
            <span>Genre : </span>
            {movieInfo.genres?.map((genre, index) => (
              <span>
                {genre.name}
                {index < movieInfo.genres.length - 1 && ", "}
              </span>
            ))}
            <p>Runtime : <span className="fw-bold">{movieInfo.runtime}</span>min</p>
            <p>Status : <span className="fw-bold">{movieInfo.status}</span></p>
          </div>
        </div>
      </div> */}
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
                <p>
                  Runtime : <span className="fw-bold">{movieInfo.runtime}</span>{" "}
                  min
                </p>
                <p>
                  Status : <span className="fw-bold">{movieInfo.status}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Here is the Review */}
        <div className="row mt-5">
          <div className="col-md-12">
            <div className="card bg-light">
              <div className="card-body p-3">
                <h2 className="fw-light">Reviews</h2>
                {review.length === 0 ? (
                  <p>No reviews available.</p>
                ) : (
                  review.map((rev, index) => (
                    <div key={index} className="mb-3">
                      <h5 className="fw-bold">{rev.author}</h5>
                      <p>{rev.content}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Moviestatus;
