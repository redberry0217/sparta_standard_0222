import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const loginBtnHandler = () => {
    if (accessToken) {
      //로그인 되어 있는 경우 --> 로그아웃 버튼 상태
      alert(`로그아웃 되었습니다.`);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("userId");
      localStorage.removeItem("nickname");
      navigate(`/`);
    } else {
      //로그인 안되어 있는 경우 -->로그인하러가기 버튼 상태
      navigate(`/login`);
    }
  };

  return (
    <nav>
      <button onClick={loginBtnHandler}>
        {accessToken ? "로그아웃" : "로그인하러가기"}
      </button>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        <hr />

        {/* 로그인 여부가 상관없는 메뉴 */}
        <p>❗️ 로그인 여부가 상관없는 메뉴</p>
        <li>
          <Link to="/">홈 메뉴로</Link>
        </li>
        <li>
          <Link to="/search">검색페이지로</Link>
        </li>
        <li>
          <Link to="/testPage">권한테스트 페이지로</Link>
        </li>

        <hr />

        {/* 로그인이 반드시 필요한 메뉴 */}
        <p>❗️ 로그인이 반드시 필요한 메뉴</p>
        <li>
          <Link to="/search/?userId=1">1번 유저의 정보</Link>
        </li>
        <li>
          <Link to="/search/?userId=2">2번 유저의 정보</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
