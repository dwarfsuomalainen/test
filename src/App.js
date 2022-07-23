import logo from './logo.svg';
import './App.css';
import Container from './components/MyContainer';

const container = Container;
function App() {
  return (
    <div className="App">
      <h1>"Hello World!"</h1>
      <h1>{container}</h1>

    </div>
  );
}

export default App;
