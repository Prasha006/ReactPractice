import { useState } from 'react'
import './App.css'

function App() {
  const data = [{
    name: "Kumar",
    img: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  },
  {
    name: "Dinesh",
    img: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  },
  {
    name: "David",
    img: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  }]
  return (
    <div className="App">
      {/* {data.map(({name,img})=>{
        return <Welcome name={name} img={img}/>
      })} */}
      <MovieList />
      {/* <AddColor /> */}

    </div>
  );
}

function AddColor() {
  const [color, setColor] = useState("orange")
  const styles = {
    backgroundColor: color,
  }

  const [colorList, setColorList] = useState( ["orange", "crimson", "pink"]);
  
  return (
  <div>
    <input style={styles} onChange={(event) => setColor(event.target.value)} value = {color}/>
    <button onClick={() => setColorList([...colorList , color])} >Add Color</button>
    {colorList.map((clr) => ( <ColorBox color={clr}/> ))}
    
  </div>
  )
}

function ColorBox({color}) {
  const styles = {
    background: color,
    height : "25px",
    width: "250px",
    marginTop: "10px"
  };
  return ( 
  <div style={styles} ></div>
  )
}

function GetColours() {
  const [color, setColor] = useState("orange")
  const styles = {
    backgroundColor: color,
  }
  
  return <div>
    <input style={styles} onChange={(event) => setColor(event.target.value)} value = {color}/>
    
  </div>
}

function MovieList() {
  const [movieList, setMovieList] = useState([
    {
      name: "Vikram",
      poster: "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      rating: 8.4,
      summary: "Members of a black ops team must track and eliminate a gang of masked murderers."
    },
    {
      name: "RRR",
      poster: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
    },
    {
      name: "Iron man 2",
      poster: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
    },
    {
      name: "No Country for Old Men",
      poster: "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary: "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
    },
    {
      name: "Jai Bhim",
      poster: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary: "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8
    },
    {
      name: "The Avengers",
      rating: 8,
      summary: "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
    },
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans."
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary: "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
    },
    {
      name: "Ratatouille",
      poster: "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary: "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
    },
    {
      name: "PS2",
      poster: "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
      summary: "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
      rating: 8
    },
    {
      name: "Thor: Ragnarok",
      poster: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
      summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
      rating: 8.8
    }
  ]);
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  


  return (
    <div>
      <div className="add-movie-form">
        <input placeholder='Name' onChange={(event) => setName(event.target.value)} value={name} />
        <input placeholder='Poster' onChange={(event) => setPoster(event.target.value)} value={poster} />
        <input placeholder='Rating' onChange={(event) => setRating(event.target.value)} value={rating}/>
        <input placeholder='Summary' onChange={(event) => setSummary(event.target.value)} value={summary}/>
        <button onClick={() => {
          const newMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
          }
          setMovieList([...movieList, newMovie])}} >Add movie</button>
        
      </div>
      
      <div className='movie-list'>
      {movieList.map((mv, index) => (<Movie movie = {mv} key={index}/>))}
      
      </div>
    </div>
  )
}

function Movie({movie}) {
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
  }

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
  )
}



function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div>
      {/* windows + . for emoji shortcut */}
      <button onClick={() => setLike(like + 1)} > 👍 {like} </button>
      <button onClick={() => setDisLike(dislike + 1)} > 👎 {dislike} </button>
    </div>
  )
}

function Welcome({ name, img }) {
  return (
    <div>
      <img src={img} alt="Profile" />
      <h2>Hello {name}</h2>
      <Counter />
    </div>

  );
}

export default App
