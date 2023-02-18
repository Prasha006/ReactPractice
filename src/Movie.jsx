import { useState } from 'react';

export function Movie({ movie }) {
  // const movie = {
  //   name: "Vikram",
  //   poster: "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
  //   rating: 8.4,
  //   summary: "Members of a black ops team must track and eliminate a gang of masked murderers."
  // }
  const styles = {
    //Conditional Style - ternary operator
    color: movie.rating > 8.5 ? "teal" : "red",
  };

  // managed vs derived state
  // show => managed state (If we affect directly it is managed state)
  // paragraph => It will change indirectly so it is derived state
  const [show, setShow] = useState(true);
  const paraStyles = {
    display: show ? "block" : "none",
  };

  return (
    <div className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <div className='movie-specs'>
        <h2 className="movie-name">{movie.name}</h2>
        {/* This curly brace is called {movie.name} Template Syntax */}
        <p style={styles} className="movie-rating"> ⭐{movie.rating} </p>
      </div>
      <button onClick={() => setShow(!show)}>Toggle Summary</button>

      {/* // Conditional styling (It just hide the content in view*/}
      {/* <p style={paraStyles} className="movie-summary">{movie.summary}</p> */}

      {/* Conditional Rendering (It will remove from DOM*/}
      {show ? <p className="movie-summary">{movie.summary}</p> : null}
    </div>
  );
}
