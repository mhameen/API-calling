import logo from './logo.svg';
import './App.css';
import Card from './Components/Card/Card';
import {useState , useEffect} from "react"
import Header from './Components/Card/Header/Header';

const url = "https://www.breakingbadapi.com/api/characters"

function App() {
const [info, setInfo]= useState([]);

  useEffect(() => {
    fetch(url)
     .then((information) => information.json())
     .then((information) => setInfo(information))
     .catch()
  }, []);
console.log(info);

  return (
    <div className="App">
      <Header />
      <div className="data" >
      {info.map((item) => (
          <Card key={item.id} 
           image={item.img} 
           name={item.name} 
           dob={item.birthday}  
           nickname={item.nickname}
           status={item.status} />
       ))}
       </div>
    </div>
  );
}

export default App;
