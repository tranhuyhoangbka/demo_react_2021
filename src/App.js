import logo from './logo.svg';
import './App.css';
import NameComponent from './NameComponent';
import LocationComponent from './LocationComponent';
import FoodForm from './FoodForm';

function App() {
  return (
    <div className="App">
      <NameComponent />
      <LocationComponent />
      <FoodForm />
    </div>
  );
}

export default App;
