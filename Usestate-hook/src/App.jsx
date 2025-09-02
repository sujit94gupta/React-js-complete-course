import './App.css'
import Container from './components/Container'
import FoodItems from './components/FoodItems'
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorMessage from './components/ErrorMessage';
import FoodInput from './components/FoodInput';
import { useState } from 'react';

function App() {
  const intialFooditems = ['Pizza'];

  const [fooditems, setFooditems] = useState(intialFooditems);

  // const [textToShow, settextToShow] = useState("Food Item Entered by user");
  const onkeydown = (event) => {
    if (event.key == "Enter") {
      const newFoodItem = event.target.value;
      const newItems = [...fooditems, newFoodItem];
      setFooditems(newItems);
    }
    // settextToShow(event.target.value);
  }


  return (
    <div className='container'>
      <Container>
        <h2 className="food-heading">Healthy Food</h2>
        <FoodInput handleKeyDown={onkeydown}></FoodInput>
        <ErrorMessage items={fooditems} />
        <FoodItems items={fooditems} />
      </Container>
    </div >
  )
}

export default App