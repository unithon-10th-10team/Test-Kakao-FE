import { Routes, Route } from "react-router-dom";
import { Auth } from "./Auth";
import { Home } from "./Home";
import { AuthHandler } from "./AuthHandler";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/login/kakao" element={<AuthHandler />} />
    </Routes>
  );
}
