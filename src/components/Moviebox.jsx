import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getMovies } from "../redux/movieSlice";
import Moviecard from "./Moviecard";
const BASE_URL = "https://api.themoviedb.org/3";

const Moviebox = () => {
  // const [movieInfo, setMovieInfo] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [value, setValue] = useState("now_playing");
  const dispatch = useDispatch();
  const showMovies = useSelector(getMovies);

  const handleChange = (e) => {
    setValue(e.target.value);
    setPage(1);
  };

  // For handling pages
  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPage) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/${value}?api_key=${process.env.REACT_APP_API_KEYS}&page=${page}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        console.log(data.results);
        // setMovieInfo(data.results);
        dispatch(fetchMovies(data.results));
        console.log("Total page", data.total_pages);
        setTotalPage(data.total_pages);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    loadMovies();
  }, [value, page, dispatch]);
  return (
    <>
      <section className="p-5">
        <div className="container d-flex justify-content-between hh">
          <h1 className="p-2 displey-2">{value}</h1>
          <div className=" p-2">
            <select value={value} onChange={handleChange}>
              <option value="now_playing">Now playing</option>
              <option value="popular">Popular</option>
              <option value="top_rated">Top rated</option>
              <option value="upcoming">Upcoming</option>
            </select>
          </div>
        </div>
        <div className="container">
          <div className="row text-center g-4">
            {showMovies?.map((movie, index) => (
              <Moviecard movie={movie} key={index} />
            ))}
          </div>
        </div>

        {/* Pagination button */}
        <div className="d-flex justify-content-center mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={handlePrevious}
            disabled={page === 1}
          >
            Previous
          </button>
          <span className="mx-2 align-content-center mq-576">
            {page} of {totalPage}
          </span>
          <button
            className="btn btn-primary me-2"
            onClick={handleNext}
            disabled={page === totalPage}
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
};

export default Moviebox;
