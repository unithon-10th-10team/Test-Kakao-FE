const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

const AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;

export function Auth() {
  function onClick() {
    window.location.href = AUTH_URL;
  }
  return <button onClick={onClick}>카카오 로그인</button>;
}
