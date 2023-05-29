import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import StarRatingComponent from "react-star-rating-component";
import { Link} from "react-router-dom";

function Cards({ name, description, rate, price, image  }) {
  
    
  return (
    <>
    
      <Card style={{ width: "18rem" }}>
        <Card.Img className="img" variant="top" src={image} />
        <Card.Body style={{display:"flex",flexDirection:"column"}}>
          <Card.Title>
            <h5>{name}</h5>
            <h6>{price} dt</h6>
            <StarRatingComponent name="rate1" starCount={5} value={rate} />
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to='/cars/reserve'state={price } style={{marginTop:"auto"}}><Button  variant="primary" >Rent</Button></Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cards;
