import logo from './logo.svg';
import './App.css';

function App() {
  const user = {
    name : 'Derrick',
    age : 17,
  }  
  const user2 = 'Maina'
  return (
    <>
    <div className="App">
      <p>Hi my name is {user.name} and I'm {user.age} years old</p>
    </div>
    <div>
      <p className = "textp">
        user2
      </p>
    </div>
    </>
  );
}

export default App;
