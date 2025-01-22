import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { Outlet } from 'react-router-dom'
import product from '../products'

function HomeScreen() {
  return (
    <>
        <h1>Latest Products</h1>
        <Row>
            {product.map((item) => (
                <Col key={item._id} sm={12} md={6} lg={4} xl={4} >
                    <Product product={item}/>
                </Col>
            ))}
        </Row>
    </>
  )
}

export default HomeScreen