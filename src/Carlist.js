import React from 'react'


const Carlist = ({cars}) => {
    
const defaultCars =[
    {carname:'Nissan',model:'Altima',quantity:4},
    {carname:'suzuki',model:'dezire',quantity:5}
];
const allCars =[...defaultCars, ...cars];
  return (
    <div>
      <h2>Cars List</h2>
      <ul>
        {allCars.map((car,index) => (
          <li  key={index}>
            {car.carname} - {car.model} - Quantity: {car.quantity}
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Carlist;
