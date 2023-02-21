import { useState } from 'react';
import { Counter } from './Counter';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


export function Movie({ movie, id }) {
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
  const navigate = useNavigate();

  return (
    <Card sx={{ height: "min-content" }} className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <CardContent>
        <div className='movie-specs'>
          <h2 className="movie-name">{movie.name} {" "}

            <IconButton color="primary" aria-label="Toggle Summary" onClick={() => setShow(!show)}>
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}

            </IconButton>

            <IconButton color="primary" aria-label="Toggle Summary" onClick={() => navigate(`/movies/${id}`)}>
              <InfoIcon />
            </IconButton>
          </h2>
          {/* This curly brace is called {movie.name} Template Syntax */}
          <p style={styles} className="movie-rating"> ⭐{movie.rating} </p>
        </div>

        {/* <button onClick={() => setShow(!show)}>Toggle Summary</button> */}

        {/* // Conditional styling (It just hide the content in view*/}
        {/* <p style={paraStyles} className="movie-summary">{movie.summary}</p> */}

        {/* Conditional Rendering (It will remove from DOM*/}
        {show ? <p className="movie-summary">{movie.summary}</p> : null}
      </CardContent>
      <CardActions>
        <Counter />
      </CardActions>

    </Card>
  );
}
