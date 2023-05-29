import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import axios from 'axios';
import MonComposant from './MonComposant';

function Cars() {
  const [price, setPrice] = useState(500);
  const [minPrice, setMinPrice] = useState(0);
  const [cars, setCars] = useState([]);

  const handlePriceChange = (newRange) => {
    setPrice(newRange[1]);
    setMinPrice(newRange[0]);
  };

  const filterCars = cars.filter((car) => car.price >= minPrice && car.price <= price);

  useEffect(() => {
    axios.get('http://localhost:8000/api/cars/get').then((res) => {
      setCars(res.data);
    });
  }, []);

  return (
    <div style={{ width: '90%', margin: 'auto' }}>
      <MonComposant onPriceChange={handlePriceChange} />

      <div className='cardsord'>
        {filterCars.map((car) => {
          return (
            <Card
              key={car.name}
              name={car.name}
              rate={car.rate}
              description={car.description}
              price={car.price}
              image={car.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cars;

