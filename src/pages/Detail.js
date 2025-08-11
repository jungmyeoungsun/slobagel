
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from '../components/Layout';
import products from '../data/products';

const Detail = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  const { title, price, image, kcal, capacity, expiration, ingredients, storage, allergy } = product;

  return (
    <div style={{ marginTop: '100px' }}>
      <Container className="detail_page">
        <Row className="detail_row">
          <Col className="detail_col_image">
            <img src={image} alt={title} />
          </Col>

          <Col className="detail_col_content">
            <h1>{title}</h1>
            <p>{price}</p>
            <div>
              <button>장바구니</button>
              <button>구매하기</button>
            </div>

            <section className="detail_section">
              <h3>제품 상세 정보</h3>
              <ul>
                <li><strong>칼로리:</strong> {kcal || '정보 없음'}</li>
                <li><strong>용량:</strong> {capacity || '정보 없음'}</li>
                <li><strong>유통기한:</strong> {expiration || '정보 없음'}</li>
                <li><strong>원재료:</strong> {ingredients || '정보 없음'}</li>
                <li><strong>보관방법:</strong> {storage || '정보 없음'}</li>
                <li><strong>알레르기 유발 성분:</strong> {allergy || '정보 없음'}</li>
              </ul>
            </section>
          </Col>
        </Row>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Link to="/"
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              border: '1px solid #E35336',
              borderRadius: '5px',
              color: '#E35336',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: 'bold'
            }}
          >
            ← 홈으로 돌아가기
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Detail;