import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
function Product({ product }) {
    const navigate = useNavigate()
    return (
        <>
            <Card style={{ width: '18rem' }} className='mb-3'>
                <Card.Img
                    variant="top"
                    src={product.image}
                    style={{ height: '150px', objectFit: 'contain', padding: '10px' }}
                />
                <Card.Body>
                    <Card.Title style={{ fontSize: '1rem', height: '40px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {product.title}
                    </Card.Title>
                    <Button variant="primary" onClick={() => navigate(`/product-detail/${product.id}`)}>
                        Ətraflı
                    </Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Product