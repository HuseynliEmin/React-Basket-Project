import React, { useContext } from 'react'
import Context from '../context/Context'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './Product';
function Products() {
    const {products} = useContext(Context)
  return (
    <>
    <Container>
        <Row className='mt-5 ' style={{display:"flex", flexWrap:"wrap"}}>
            {
                products?.map((product) => (
                    <Col   key={product.id}>
                        <Product  product={product}></Product>
                    </Col>
                ))
            }
        </Row>
    </Container>
</>
  )
}

export default Products