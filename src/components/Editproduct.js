import React, { useEffect, useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap'
import { API } from '../global'
import { useNavigate, useParams } from 'react-router-dom'

function Editproduct() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)


    useEffect(() => {
        fetch(`${API}/users/${id}`, {
            method: "GET"
        })
            .then((data) => data.json())
            .then((product) => setProduct(product))
    }, [])
    if (product) {
        return (<EditProductForm product={product} />)
    }
    else {
        return ("Loading...")
    }

}


function EditProductForm({ product }) {
    const [name, setName] = useState(product.name)
    const [productImage, setProductImage] = useState(product.productImage)
    const [description, setDescription] = useState(product.description)
    const [price, setPrice] = useState(product.price)


    const navigate = useNavigate()


    const handleSubmit = () => {
        const updatedProducts = {
            name: name,
            productImage: productImage,
            description: description,
            price: price
        }
        fetch(`${API}/users/${product.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedProducts)
        })
            .then((data) => data.json())

            .then(() => navigate("/"))
    }
    return (
        <div>
            <h1>Editproduct</h1>
            <Button onClick={() => navigate(-1)}>BACK</Button>
            <Form>
                <FormGroup row>
                    <Label
                        for="name"
                        sm={2}
                    >
                        Product Name
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="name"
                            name="name"
                            placeholder="product name"
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="productImage"
                        sm={2}
                    >
                        Product Image
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="productImage"
                            name="productImage"
                            placeholder="product image"
                            type="text"
                            value={productImage}
                            onChange={(event) => setProductImage(event.target.value)}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="description"
                        sm={2}
                    >
                        Description
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="description"
                            name="description"
                            placeholder="description"
                            type="text"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label
                        for="price"
                        sm={2}
                    >
                        Price
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="price"
                            name="price"
                            placeholder="price"
                            type="text"
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                        />
                    </Col>
                </FormGroup>

                <Button onClick={handleSubmit}>
                    Submit
                </Button>


            </Form>
        </div>
    )
}
export default Editproduct