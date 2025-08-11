
import React from 'react';
import './pages.css';
import { Container } from '../components/Layout';

function About() {
  return (
    <Container className="about_container">
      <div className="about_hero">
        <img
          src={process.env.PUBLIC_URL + '/images/about_01.jpg'}
          alt="About 이미지"
        />
      </div>

      <div className="about_content">
        <h1>About Us</h1>
        <p>
          슬로베이글은
          거제에 위치한 슬로우소랑의 베이글 브랜드로<br />
          매일 아침 우리 가족이 먹는다는 생각으로<br />
          정성을 다하여 베이글을 만들어냅니다.<br />
          <br />
          자체 개발한 24시간 이상 숙성 된 천연발효종이 사용되어<br />
          쫄깃한 식감 뿐만 아니라 소화가 잘 되는 베이글로 완성됩니다.<br />
          <br />
          매일 아침 생산한 맛있는 베이글을 받아 보는 즉시<br />
          드실 수 있도록 NO 냉동, NO 방부제로 출고하여<br />
          매장에서 드시는 것과 동일한 맛을 집에서 즐기실 수 있습니다.<br />
          <br />
          Slo Bagel is a bagel brand<br />
          of Slow Sorang located in Geoje.<br />
          We makes bagels with all our heart<br />
          every morning thinking that our family eats it.<br />
          <br />
          Natural fermented paper that has been developed<br />
          by itself for more than 24 hours is used to complete<br />
          a bagel that is not only chewy but also digested.<br />
          <br />
          You can enjoy the same taste at home as you eat it<br />
          as soon as you receive the delicious bagel produced every morning.<br />
          It is shipped as NO frozen and NO preservative<br />
          so that you can eat it as soon as you receive it.<br />
          <br />
          Every day enjoy your bagel!<br />
          :)<br />
        </p>
      </div>
    </Container>
  );
}

export default About;