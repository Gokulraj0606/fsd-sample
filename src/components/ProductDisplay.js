import { useEffect, useState } from 'react';
import Productcards from './Productcards';
import axios from 'axios';
import { Button, Container } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { API } from '../global';

export function ProductDisplay() {
    const [productData, setProductData] = useState([]);
    const navigate = useNavigate()

    // fetch method
    // useEffect(() => {
    //     fetch("https://64dc8488e64a8525a0f69f28.mockapi.io/users")
    //         .then((res) => res.json())
    //         .then((data) => setProductData(data));
    // }, []);


    //Axios method

    const getProducts = () => {
        axios.get(`${API}/users`)
            .then((res) => {
                if (res.status === 401) {
                    console.log("Data not found")
                }
                setProductData(res.data)
            })
    }

    useEffect(() => {
        getProducts()


    }, [])

    const handleDelete = (id) => {
        axios.delete(`${API}/users/` + id)
            .then((res) => {
                if (res.status === 200) {
                    getProducts()
                }

            })

    }




    return (
        <Container>
            <h1> Product Display⚠</h1> <br></br>
            <Button style={{
                display: "flex",
                justifyContent: "end",
                marginLeft: "1100px",
                marginBottom: "10px",
                backgroundColor: "darkblue"
            }} onClick={() => navigate("/product/addProduct")}>Create Product</Button>
            {productData.map((item) => {
                return (
                    <Productcards key={item.id} value={item} productData={productData} setProductData={setProductData} handleDelete={handleDelete} />
                )
            })}
        </Container>
    );
}
