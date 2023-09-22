import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";

export function AuthHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(location.search).get("code");
    if (!code) {
      navigate("/auth", { replace: true });
      return;
    }
    const request = {
      grant_type: "authorization_code",
      client_id: process.env.REACT_APP_CLIENT_ID,
      redirect_uri: process.env.REACT_APP_REDIRECT_URI,
      code: code,
    };
    axios
      .post("https://kauth.kakao.com/oauth/token", request, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        localStorage.setItem("access_token", res.data.access_token);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.error(err);
        navigate("/auth", { replace: true });
      });
  }, []);

  return <div>로딩중...</div>;
}
