import './App.css'
import { MovieList } from './MovieList';
import { Routes, Route, Link } from "react-router-dom";

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
      <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to='/movies'>Movies</Link> </li>
        <li></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to MovieApp</h1>
    </div>
  )
}

export default App
