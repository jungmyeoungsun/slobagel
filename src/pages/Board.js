import React, { useState } from 'react';
import './pages.css';
import { Container } from '../components/Layout';

const Board = () => {
  const [selectedCategory, setSelectedCategory] = useState('NOTICE');

  const categories = ['NOTICE', 'REVIEW', 'Q&A', 'INFO'];

  const posts = [
    { id: 1, category: 'NOTICE', title: '공지 : 주문 전 꼭 확인해주세요!', author: 'slobagel', date: '2024-02-16 10:56:19' },
    { id: 2, category: 'NOTICE', title: '공지 : 회원가입시 적립금 3,000원 지급 안내', author: 'slobagel', date: '2024-02-08 19:33:18' },
    { id: 3, category: 'REVIEW', title: '리뷰이벤트 : 크림치즈를 선물로 드려요!', author: 'slobagel', date: '2024-03-14 17:25:39' },
    { id: 4, category: 'Q&A', title: '감사 이벤트 : 많은 사랑 감사합니다', author: 'slobagel', date: '2024-02-13 14:08:51' },
    { id: 5, category: 'INFO', title: '오픈 이벤트 : 슬로베이글 런칭 및 온라인몰 오픈 기념 이벤트', author: 'slobagel', date: '2024-02-08 20:45:27' },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredPosts = posts.filter(post => post.category === selectedCategory);

  return (
    <Container className="board_container">
      <div className="board_categories">
        {categories.map((category) => (
          <span
            key={category}
            className={`board_category ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </span>
        ))}
      </div>

      <div className="board_posts">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id} className="board_post">
              <div className="post_title">{post.title}</div>
              <div className="post_info">
                <span className="post_author">{post.author}</span>
                <span className="post_date">{post.date}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="no_posts">게시물이 없습니다.</div>
        )}
      </div>


      <div className="board_pagination">
        <button>{'<'}</button>
        <span className="current_page">1</span>
        <button>{'>'}</button>
      </div>


      <div className="board_search">
        <select>
          <option>일주일</option>
          <option>1개월</option>
          <option>3개월</option>
          <option>6개월</option>
        </select>

        <select>
          <option>제목</option>
          <option>내용</option>
          <option>작성자</option>
        </select>

        <input type="search" placeholder="검색어를 입력하세요" />
        <button>검색</button>
      </div>
    </Container>
  );
};

export default Board;