import axios from "axios";
import { useNavigate } from "react-router";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

const AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;

export function Auth() {
  const navigate = useNavigate();

  function onLogin() {
    window.location.href = AUTH_URL;
  }

  function onLogout() {
    const token = localStorage.getItem("access_token");
    if (!token) {
      alert("로그인이 되어있지 않습니다.");
      return;
    }
    axios
      .post(
        "https://kapi.kakao.com/v1/user/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        localStorage.removeItem("access_token");
        alert("로그아웃 되었습니다.");
        navigate("/auth");
      })
      .catch((err) => {
        console.error(err);
        alert("로그아웃에 실패했습니다.");
      });
  }
  return (
    <>
      <button onClick={onLogin}>카카오 로그인</button>
      <button onClick={onLogout}>로그아웃</button>
    </>
  );
}
