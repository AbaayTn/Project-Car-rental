import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Add() {
  const [car, setCar] = useState({
    name: '',
    description: '',
    rate: 0,
    price: 0,
    image: '',
  });
  const navigate = useNavigate();

  const addCar = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem('user')).token;
    try {
      await axios.post('http://localhost:8000/api/cars/add', car, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      navigate('/cars');
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCar((prevCar) => ({
      ...prevCar,
      [name]: value,
    }));
  };

  return (
    <div>
      <form>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter car name"
          value={car.name}
          onChange={handleInputChange}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          placeholder="Enter the description"
          value={car.description}
          onChange={handleInputChange}
        />
        <label>Rate</label>
        <input
          type="number"
          name="rate"
          placeholder="Enter the rate"
          min="0"
          max="5"
          value={car.rate}
          onChange={handleInputChange}
        />
        <label>Price</label>
        <input
          type="number"
          name="price"
          placeholder="Enter the price"
          min="0"
          max="500"
          value={car.price}
          onChange={handleInputChange}
        />
        <label>Image</label>
        <input
          type="text"
          name="image"
          placeholder="Enter the image link"
          value={car.image}
          onChange={handleInputChange}
        />
        <button onClick={addCar}>Add</button>
      </form>
    </div>
  );
}

export default Add;
