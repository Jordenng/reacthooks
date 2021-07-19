import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import Navbar from "./Navbar";



const App=()=>{
    return (
        <div>
            <Navbar/>
            <h1>hello</h1>
        </div>
    )
}
ReactDOM.render(
      <App />,
    document.getElementById('root')
);


export default App;
