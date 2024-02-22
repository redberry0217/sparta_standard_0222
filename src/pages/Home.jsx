import React from "react";

const Home = () => {
  const isLoggedIn = localStorage.getItem("accessToken");
  const userNickname = localStorage.getItem("nickname");

  return (
    <div>
      <h1>Home</h1>
      <p>Home page</p>
      {isLoggedIn ? (
        <p>안녕하세요, {userNickname}님!</p>
      ) : (
        <p>로그인을 해주세요.</p>
      )}
    </div>
  );
};

export default Home;
