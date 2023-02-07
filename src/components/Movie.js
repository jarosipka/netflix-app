import "./Movie.css";
import React from "react";
import MovieDeleteButton from "./MovieDeleteButton";
import data from "../data";
import AllDeleteButton from "./AllDeleteButton";
import ReloadMovieButton from "./ReloadMovieButton";
import { useState } from "react";

const Movie = () => {
  // Use the `useState` hook to create a state for the movie list
  const [movieList, setMovieList] = useState(data);

  // Function to delete a single movie from the movie list
  const deleteOneMovie = (idecko) => {
    // Filter the movie list to only keep movies that do not have the specified id
    const filteredMovies = movieList.filter((oneMovie) => {
      return oneMovie.id !== idecko;
    });
    // Update the movie list state with the filtered movie list
    setMovieList(filteredMovies);
  };

  // Function to delete all movies from the movie list
  const deleteAllMovies = () => {
    // Update the movie list state with an empty array
    setMovieList([]);
  };

  // Function to reload the movie list
  const reloadAllMovies = () => {
    // Update the movie list state with the original data
    setMovieList(data);
  };

  return (
    <section>
      <div className="all-movies">
        {movieList.map((oneMovie) => {
          // Destructure properties from the current movie object
          const { id, image, title, age, tags, description } = oneMovie;
          return (
            <div className="one-movie" key={id}>
              <img src={image} alt="" />
              <h2>{title}</h2>
              <p>{age}</p>
              <p>{tags}</p>
              <p>{description}</p>
              <MovieDeleteButton deleteMovie={() => deleteOneMovie(id)} />
            </div>
          );
        })}
      </div>
      
      <div className="button-box">
      {/* Renders the AllDeleteButton component if there is at least one movie in movieList */}
        {movieList.length > 0 && (
          <AllDeleteButton deleteMovies={deleteAllMovies} />
        )}
         {/* Renders the ReloadMovieButton component if there are any movies left to be loaded */}
        {movieList.length < data.length && (
          <ReloadMovieButton reloadMovies={reloadAllMovies} />
        )}
      </div>
    </section>
  );
};

export default Movie;
