import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddMovie({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  return (
    <div className="add-movie-form">
      <TextField id="standard-basic" label="Name" variant="standard" onChange={(event) => setName(event.target.value)} value={name} />
      <TextField id="standard-basic" label="PosterLink" variant="standard" onChange={(event) => setPoster(event.target.value)} value={poster} />
      <TextField id="standard-basic" label="Rating" variant="standard" onChange={(event) => setRating(event.target.value)} value={rating} />
      <TextField id="standard-basic" label="Summary" variant="standard" onChange={(event) => setSummary(event.target.value)} value={summary} />
      <Button variant="contained" onClick={() => {
        const newMovie = {
          name: name,
          poster: poster,
          rating: rating,
          summary: summary,
        };
        setMovieList([...movieList, newMovie]);
      }}>Add movie</Button>
      {/* <Button variant="contained">Contained</Button> */}

    </div>
  );
}
