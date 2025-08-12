
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from '../components/Layout';
import ProductCard from '../components/ProductCard';
import bests from '../data/bests';
import newsList from '../data/news';
import './pages.css';

const reviews = [
  {
    id: 1,
    title: "첫 주문입니다!",
    content: "빵순이라 ㅎ 요즘 베이글이 핫한거 같아서 이왕이면 맛집으로 소문난 곳에서 먹고싶어 주문했습니다.",
    date: "2024-04-17",
    image: process.env.PUBLIC_URL + '/images/babel_02.jpg'
  },
  {
    id: 2,
    title: "맛있어요!",
    content: "시품은 좀 딱딱하고 퍽퍽한데 쫄깃 부드러워 맛있어요! 크림치즈 없이도 맛있고 크림치즈랑 같이 먹으 ...",
    date: "2024-04-16",
    image: process.env.PUBLIC_URL + '/images/babel_06.jpg'
  },
  {
    id: 3,
    title: "넘 맛있어요",
    content: "쫄깃하고 고소하고 맛있네요! 여러가지 맛을 볼 수 있어 좋아요! 주문시 넣어두신 안내사항대로 하니 ...",
    date: "2024-04-15",
    image: process.env.PUBLIC_URL + '/images/creamchees_01.jpg'
  }
];

const Home = () => {
  return (
    <Container className="home_container">
      <div className="home_visual_main">
        <img src={process.env.PUBLIC_URL + '/images/visual_main_01.jpg'} alt="비주얼 메인" className="visual_image" />
        <div className="visual_text">
          <h1 className="visual_title">Handmade Daily Bagels</h1>
          <p className="visual_subtitle">매일 아침 갓 구운 베이글을 전합니다.</p>
          <Link to="/shop" className="visual_shop_link">
            제품보기
          </Link>
        </div>
      </div>

      <div className="home_intro_section">
        <div className="home_text_box">
          <h2 className="home_title">슬로베이글은</h2>
          <p className="home_intro_text">
            거제에 위치한 슬로우소랑의 베이글 브랜드입니다.<br /><br />
            매일 아침 우리 가족이 먹는다는 생각으로 정성을 다하여 베이글을<br />
            만들어 냅니다. 자체 개발한 24시간 이상 숙성된 천연발효종이 사용<br />
            되어 쫄깃한 식감 뿐만 아니라 소화가 잘 되는 베이글로 완성됩니다.<br /><br />
            매일 아침 생산한 맛있는 베이글을 받아 보는 즉시 드실 수 있도록<br />
            NO 냉동, NO 방부제로 출고하여 매장에서 드시는 것과 동일한 맛을<br />
            집에서 즐기실 수 있습니다.<br /><br />
            Every day enjoy your bagel :-)
          </p>
        </div>
        <div className="home_intro_imagebox">
          <img
            src={process.env.PUBLIC_URL + '/images/introduce_01.jpg'}
            alt="소개 이미지"
            className="home_intro_image"
          />
        </div>
      </div>

      <hr className="home_divider" />

      {/* What's BEST */}
      <h2 className="home_section_title">What's BEST</h2>
      <Row className="best_box">
        {bests.map((best) => (
          <Col key={best.id} className="home_pro_col">
            <ProductCard product={best} />
          </Col>
        ))}
      </Row>

      <hr className="home_divider" />
      {/* What's NEW */}
      <h2 className="home_section_title">What's NEW</h2>
      <Row className="new_box">
        {newsList.map((newsItem) => (
          <Col key={newsItem.id} className="home_pro_col">
            <ProductCard product={newsItem} />
          </Col>
        ))}
      </Row>

      {/* Real Reviews */}
      <section className="real_reviews">
        <h2>Real Reviews</h2>
        <div className="review_list">
          {reviews.map((r) => (
            <div key={r.id} className="review_card">
              <img src={r.img} alt={r.title} />
              <div className="review_content">
                <div>{r.title}
                  <div>HOT</div>
                </div>
                <p style={{fontSize:'13px'}}>{r.content}</p>
                <span className="review_date">{r.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Home;