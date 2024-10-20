// src/App.js

import React, { useState } from 'react';
import './App.css';

function App() {
  // 게시글 데이터를 배열로 관리 (제목, 추천, 조회수)
  const [posts] = useState([
    { id: 1, title: 'First Post', likes: 12, views: 150 },
    { id: 2, title: 'Second Post', likes: 8, views: 95 },
    { id: 3, title: 'Third Post', likes: 21, views: 220 },
    // 추가 게시글을 여기에 추가할 수 있음
  ]);

  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header">
        <div className="container">
          <div className="logo">
            <h1>web1</h1>
          </div>
          <div className="login-btn">
            <button onClick={() => alert('Login button clicked!')}>Login</button>
          </div>
        </div>
      </header>

      {/* Navigation Bar (Categories) */}
      <nav className="category-nav">
        <ul>
          <li>COMMUNITY</li>
          <li>COST</li>
          <li>BABY</li>
          <li>LIVING</li>
        </ul>
      </nav>

      {/* 게시판 섹션 */}
      <section className="board">
        <h2>게시판</h2>
        <ul className="post-list">
          {posts.map(post => (
            <li key={post.id} className="post-item">
              <span className="post-title">{post.title}</span>
              <span className="post-likes">추천: {post.likes}</span>
              <span className="post-views">조회수: {post.views}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Main Content */}
      <main>
        <h1>Welcome to web1!</h1>
      </main>
    </div>
  );
}

export default App;
