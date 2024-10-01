import React, { useEffect, useState } from "react";
import Moviecard from "./Moviecard";
const BASE_URL = "https://api.themoviedb.org/3";
const Moviebox = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const [value, setValue] = useState("now_playing");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // console.log(value);
  useEffect(() => {
    const loadMovies = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/${value}?api_key=${process.env.REACT_APP_API_KEYS}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        console.log(data.results);
        setMovieInfo(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    loadMovies();
  }, [value]);
  return (
    <>
      <section className="p-5">
        <div className="container">
          <div class=" d-flex justify-content-between">
            <h1 class="p-2 displey-2">{value}</h1>
            <div class=" p-2">
              <select value={value} onChange={handleChange}>
                <option value="now_playing">Now playing</option>
                <option value="popular">Popular</option>
                <option value="top_rated">Top rated</option>
                <option value="upcoming">Upcoming</option>
              </select>
            </div>
          </div>
          <div className="row text-center g-4">
            {movieInfo?.map((movie, index) => (
              <Moviecard movie={movie} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Moviebox;
