
import React, { useState } from 'react';
import { Container, Row, Col } from '../components/Layout';
import ProductCard from '../components/ProductCard';
import './pages.css';
import productsData from '../data/products';

const categories = ['ALL', 'BAGEL', 'SAUCE', 'COFFEE', 'CREAM CHEESE'];

const Shop = () => {
  const [filter, setFilter] = useState('ALL');

  const filtered = productsData.filter((item) =>
    filter === 'ALL' ? true : item.category === filter
  );

  return (
    <Container className="shop_container">
      <div className="shop_categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={filter === cat ? 'active' : ''}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <Row className="shop_products">
        {filtered.map((prod) => (
          <Col key={prod.id} className="shop_col">
            <ProductCard product={prod} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Shop;