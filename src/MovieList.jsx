
import { Movie } from './Movie';

export function MovieList( {movieList}) {
 
  return (
    <div>
      {/* <AddMovie movieList={movieList} setMovieList={setMovieList} /> */}
      <div className='movie-list'>
        {movieList.map((mv, index) => (<Movie movie={mv} key={index} id={index} />))}

      </div>
    </div>
  );
}

