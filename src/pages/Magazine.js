import React from 'react';
import './pages.css';
import { Container } from '../components/Layout';

function Magazine() {
  return (
    <Container className="magazine_container">
      <div className="magazine_img">
        <img
          src={process.env.PUBLIC_URL + '/images/megazine_01.jpg'}
          alt="Magazine 이미지"
        />
      </div>

      <div className="magazine_content">
        <p>
          슬로베이글은
          거제에 위치한 슬로우소랑 카페의 베이글 브랜드입니다.<br />
          <br />
          슬로우소랑카페 오픈 1주년을 맞이하여<br />
          2024년 1월 24일부터 26일까지<br />
          베이글 할인 이벤트를 진행했습니다.<br />
          <br />
          이벤트가 진행되는 3일 동안 많은 분들이 축하해주신 덕에<br />
          약 베이글 3,500개가 판매되었습니다.<br />
          <br />
          슬로우소랑 카페 1주년 이벤트를 통하여<br />
          슬로우소랑 카페 오픈 1주년을 축하해주신<br />
          모든 분들께 감사의 인사 전합니다.<br />
          <br />
          슬로베이글은 택배로 집에서도 즐길 수 있지만<br />
          거제 바다 앞, 정원이 넓게 펼쳐진 슬로우소랑 카페에서도<br />
          즐기실 수 있습니다.<br />
          <br />
          거제의 자연과 함께<br />
          슬로베이글 즐기러 슬로우소랑 카페를 방문해 보세요.<br />
          <br />
          <strong>경상남도 거제 거제남서로3955-2, 1F 슬로우소랑</strong><br />
        </p>
      </div>
    </Container>
  );
}

export default Magazine;