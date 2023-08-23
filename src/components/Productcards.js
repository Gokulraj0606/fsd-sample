import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'

function Productcards({ value, handleDelete }) {
  const navigate = useNavigate()
  return (
    <div className='cardbody'>
      <Card
      // style={{
      //   width: '18rem'
      // }}
      >
        <img width={"100%"}
          alt="Sample"
          src={value.productImage}
        />
        <CardBody>
          <CardTitle tag="h5">
            {value.name}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            ₹ {value.price}
          </CardSubtitle>
          <CardSubtitle

            tag="h6"

          >
            Units Available:{value.unitsAvailable}
          </CardSubtitle>
          <CardText className='description'>
            {value.description}
          </CardText>
          <Button onClick={() => navigate(`product/editProduct/${value.id}`)} >
            Edit
          </Button> { }
          <Button style={{
            color: "red",
            backgroundColor: "black"
          }} onClick={() => handleDelete(value.id)}>
            Delete
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default Productcards