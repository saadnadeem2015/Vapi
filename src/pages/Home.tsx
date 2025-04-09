import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Vapi from "@vapi-ai/web";

const Home = () => {
  const navigate = useNavigate();
  const vapiRef = useRef<Vapi | null>(null);

  useEffect(() => {
    const vapi = new Vapi(process.env.REACT_APP_VAPI_API_KEY!);
    vapiRef.current = vapi;
    console.log(vapi, "console of vapi");

    // Listen for function calls to backend
    vapi.on("message", (message) => {
      console.log("Received message:", message);
      // Check if the message is a function call
      if (message.type === "function_call") {
        console.log("Function call detected:", message);
        navigate("/redirect");
      }
    });
  }, [navigate]);

  const startAgent = () => {
    if (vapiRef.current) {
      vapiRef.current.start("731aa6b6-69ce-4092-9a3e-5b6a0aa5a173");
    }
  };
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Talk to Riley, the Assistant 🤖</h1>
      <button onClick={startAgent}>Start Voice</button>
    </div>
  );
};

export default Home;
