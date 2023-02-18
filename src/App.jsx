import './App.css'
import { MovieList } from './MovieList';

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

export default App
