import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function Reserve() {
  const startdate = useRef(null);
  const enddate = useRef(null);
  const location = useLocation();
  const [total, setTotal] = useState(0);

  const confirm = (e) => {
    e.preventDefault();

    const startDate = new Date(startdate.current.value);
    const endDate = new Date(enddate.current.value);
    const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

    const totalPrice = days * location.state;

    if (totalPrice > 0) {
      setTotal(totalPrice);
    }
  };

  return (
    <div>
      <div>
        <br />
        <Form.Group controlId="dob">
          <Form.Label>Start Date</Form.Label>
          <Form.Control type="date" name="dob" onChange={confirm} ref={startdate} />
          <br />

          <Form.Label>End Date</Form.Label>
          <Form.Control type="date" name="dob" onChange={confirm} ref={enddate} />
        </Form.Group>

        <br />
        <br />

        <form>
          <Link to="/cars">
            <button>Confirm</button>
          </Link>
        </form>
      </div>
      <br />
      <h1>The total is: {total} dt</h1>
    </div>
  );
}

export default Reserve;
