import React, { useContext, useState  , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Context from '../context/Context'
function ProductDetail() {
    const { products, basket, setBasket } = useContext(Context)
    useEffect(() => {
        const localBasket = JSON.parse(localStorage.getItem("basket")) || [];
        setBasket(localBasket);
    }, [setBasket]);

    useEffect(() => {
        localStorage.setItem("basket", JSON.stringify(basket));
    }, [basket]);
    const { id } = useParams()
    let findProducts = products.find(product => product.id == id)
    
    const handleAddToCart = () => {
        let findBasketItem = basket.find(item => item.id == id)
        if(!findBasketItem){
            findProducts ={...findProducts , count: 1}
            setBasket([...basket , findProducts])
        }
        else{
          const updatedBasket = basket.map(product =>{
            return product.id == findProducts.id ? {...product , count : ++product.count } : product
          })
          setBasket(updatedBasket)
        
        }
      
    }
    return (
        <div>
            <>
                <Container>
                    <Row >
                        <Col md={3}></Col>
                        <Col md={6}>
                            <Card className='mt-5 text-center'>
                                <Card.Body>
                                    <Card.Img
                                        variant="top"
                                        src={findProducts?.image}
                                        style={{ height: '150px', objectFit: 'contain', padding: '10px' }}
                                    />
                                    <Card.Title>{findProducts?.title}</Card.Title>
                                    <Card.Text>
                                        {findProducts?.description}
                                    </Card.Text>
                                    <Card.Text>
                                        {findProducts?.price} ₼
                                    </Card.Text>
                                    <Button variant="primary" onClick={handleAddToCart}>Səbətə əlavə et</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                </Container>
            </>
        </div>
    )
}

export default ProductDetail