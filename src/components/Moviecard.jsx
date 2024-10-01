import React from "react";

const Moviecard = ({ movie }) => {
  return (
    <>
      <div className="col-5-per-row">
        <div className="card bg-white">
          <div className="card-image">
            <a href={`/moviestatus/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt=""
              />
            </a>
          </div>
          <span className="round-span">{Math.floor(movie.vote_average)}</span>
          <div className="card-body text-start">
            <a href="/">
              <span className="text-dark fw-bold">{movie.title}</span>
            </a>
            <br />
            <span className="text-dark fw-light">{movie.release_date}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Moviecard;
