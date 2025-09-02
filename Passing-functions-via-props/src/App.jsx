import './App.css'
import Container from './components/Container'
import FoodItems from './components/FoodItems'
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorMessage from './components/ErrorMessage';
import FoodInput from './components/FoodInput';

function App() {
  const fooditems = [
    { id: 1, name: 'Pizza', price: 10 },
    { id: 2, name: 'Burger', price: 5 },
    { id: 3, name: 'Pasta', price: 8 },
    { id: 4, name: 'Salad', price: 6 },
    { id: 5, name: 'Sushi', price: 12 }
  ];

  const handleOnChange = (event) => {
    console.log(event.type);
  }

  return (
    <div className='container'>
      <Container>
        <h2 className="food-heading">Healthy Food</h2>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <ErrorMessage items={fooditems} />
        <FoodItems items={fooditems} />
      </Container>
    </div >
  )
}

export default App