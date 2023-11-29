import React ,{useState} from 'react';
import Addcar from './Addcar';
import Carlist from './Carlist';
import './App.css'

const App = () =>{
  const [cars,setCars] = useState([]);

  const handleAddcar = (newCar) =>{
    const existingCarIndex = cars.findIndex(
      (car) =>car.carname === newCar.carname && car.model
    );
    if(existingCarIndex !== -1){
      const updateCars = [...cars];
      updateCars[existingCarIndex].quantity += newCar.quantity;
      setCars(updateCars);
    }
    else{
      setCars([...cars,newCar]);
    }
  }
  return(
    <div className='app-container'>
    <Carlist cars={cars}/>
    <Addcar onAddcar ={handleAddcar} /> 
    </div>
  );
};

export default App;
