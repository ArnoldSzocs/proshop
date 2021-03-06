import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList } from '../actions/productActions';
import Loader from '../common/Loader';
import Message from '../common/Message';
import Product from '../components/Product';

const HomeScreen = () => {
  const { products } = useSelector((state) => state.product);
  const { loading, error } = useSelector((state) => state.async);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductList());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
