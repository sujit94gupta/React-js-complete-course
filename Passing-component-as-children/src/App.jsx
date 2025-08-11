import './App.css'
import Container from './components/Container'
import FoodItems from './components/FoodItems'

function App() {
  const fooditems = [
    { id: 1, name: 'Pizza', price: 10 },
    { id: 2, name: 'Burger', price: 5 },
  ];
  return (
    <div>
      <Container>
        <h2>Passing Components as Children</h2>
        <FoodItems item={fooditems} />
        <p>Enjoy your meal!</p>
      </Container>
    </div>
  )
}

export default App
