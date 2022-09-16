import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(7);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer !== 0) setTimer(timer - 1);
      else navigate("/");
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <h1>404</h1>
      <h2>Redirect to main in:</h2>
      <h2>{timer}</h2>
    </>
  );
}
