import { Counter } from './App';

function Welcome({ name, img }) {
  return (
    <div>
      <img src={img} alt="Profile" />
      <h2>Hello {name}</h2>
      <Counter />
    </div>

  );
}
