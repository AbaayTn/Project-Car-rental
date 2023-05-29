import React, { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Update() {
  const navigate = useNavigate();
  const ncar = useRef(null);
  const nncar = useRef(null);
  const n1car = useRef(null);
  const n2car = useRef(null);
  const n3car = useRef(null);
  const n4car = useRef(null);

  const updateCar = async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem('user')).token;
    try {
      await axios.post(
        'http://localhost:8000/api/cars/update',
        {
          name: ncar.current.value,
          newname: nncar.current.value,
          newdescription:n1car.current.value,
          newrate:n2car.current.value,
          newprice:n3car.current.value,
          newimage:n4car.current.value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate('/cars');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form>
        <label>Name</label>
        <input type="text" placeholder="Enter car name" ref={ncar} />

        <label>New Name</label>
        <input type="text" placeholder="Enter car new name" ref={nncar} />

        <label>New Description</label>
        <input type="text" placeholder="Enter car new description" ref={n1car} />

        <label>New Rate</label>
        <input type="number" placeholder="Enter car new rate" ref={n2car} min={0} max={5}/>

        <label>New Price</label>
        <input type="number" placeholder="Enter car new price" ref={n3car} min={0} max={500}/>

        <label>New Image</label>
        <input type="text" placeholder="Enter car new image" ref={n4car} />

        <button onClick={updateCar}>Update</button>
      </form>
    </div>
  );
}

export default Update;
