import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const [count, setCount] = useState(15);
  const navigate = useNavigate();

  useEffect(() => {
    setInterval(() => setCount((count) => count - 1), 1000);
    setTimeout(() => navigate("/"), 15000);
  }, [navigate]);
  return (
    <h3 className="mt-5">
      your oder have been placed successfully. you will be redirectd in {count}{" "}
      seconds
      </h3>
  );
};

export default Success;
