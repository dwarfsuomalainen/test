import logo from './logo.svg';
import './App.css';
import MyContainer from './components/MyContainer';
import {useState} from "react"

function App() {
  const header = "This is a header of List";
  const [items, setItems] = useState([{
    "id": 1, 
    "text": "This is first item of list"
  },
  {
    "id": 2, 
    text: "This is second item of list"
  }
])
  return (
    <div className="App">
      <h1>"Hello World!"</h1>
      <MyContainer header={header} items={items}/>

    </div>
  );
}

export default App;
