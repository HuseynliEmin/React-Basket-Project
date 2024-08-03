import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

const Basket = () => {
    const { basket, setBasket } = useContext(Context);
    useEffect(() => {
        const localBasket = JSON.parse(localStorage.getItem("basket")) || [];
        setBasket(localBasket);
    }, [setBasket]);
    const plus = (id) => {
        const updatedBasket = basket.map(product =>
            product.id === id ? { ...product, count: product.count + 1 } : product
        );
        setBasket(updatedBasket);
    };

    const minus = (id) => {
        const updatedBasket = basket.map(product =>
            product.id === id ? { ...product, count: Math.max(0, product.count - 1) } : product
        );
        setBasket(updatedBasket);
    };
    const deletedProduct = (id) => {
        const uptadedLocal = basket.filter(product => product.id != id)
        setBasket(uptadedLocal)
        localStorage.setItem("basket",JSON.stringify(uptadedLocal))
    }
    console.log(basket);
    return (
        <Container>
            <Row className='mt-5'>
                {basket.map((product) => (
                    <Col key={product.id} md={4}>
                        <Card className='mb-4'>
                            <Card.Img
                                variant="top"
                                src={product.image}
                                style={{ height: '150px', objectFit: 'contain', padding: '10px' }}
                            />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>{product.category}</Card.Text>
                                <Card.Text>{product.count * product.price} ₼</Card.Text>
                                <Button onClick={() => minus(product.id)}>-</Button>
                                <span style={{ textAlign: "center", display: "block" }}> {product.count} </span>
                                <Button onClick={() => plus(product.id)}>+</Button>
                                <Button style={{ backgroundColor: "red", marginTop: "10px" }} onClick={() => deletedProduct(product.id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Basket;
