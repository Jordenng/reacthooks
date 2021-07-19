import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";


  const Dog=()=>{
    return <div>
      <h1>I Am A DOG</h1> <h2>Noof hoof</h2>
    </div>
  }
// eslint-disable-next-line
  const RandomNUm=()=>{
    const num = Math.random()*10
    return <div>
      <h1>Your number is: {num}</h1>
      <h2>{num >5? "BIG":"small"} number</h2>

    </div>}
ReactDOM.render(
      <RandomNUm />,
    document.getElementById('root')
);
export default Dog;
