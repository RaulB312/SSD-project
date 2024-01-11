import React, { useState, useEffect } from "react";
import { PrettyChatWindow } from "react-chat-engine-pretty";
import balloon1 from "./assets/ballon.png";
import balloon2 from "./assets/ballon2.png";
import hoseImage from "./assets/hose.png";
import pump from "./assets/pump.png";
import hose2 from "./assets/hose2.png";
import circle from "./assets/black-circle.png";

const ChatsPage = (props) => {
  const originalBalloonSize = { width: 91, height: 128 };
  const [loading, setLoading] = useState(true);
  const [balloonSize, setBalloonSize] = useState({ ...originalBalloonSize });
  const [progress, setProgress] = useState(0);
  const [showBalloon2, setShowBalloon2] = useState(false);
  const [isCircleClicked, setIsCircleClicked] = useState(false);

  const pumpBalloon = () => {
    if (progress < 95) {
      setProgress((prevProgress) => prevProgress + 1);
      setBalloonSize((prevSize) => ({
        width: prevSize.width + 1,
        height: prevSize.height + 0.3,
      }));
    }
  };
  const handleCircleClick = () => {
    pumpBalloon();
    setIsCircleClicked(true);
    setTimeout(() => {
      setIsCircleClicked(false);
    }, 100);
  };

  useEffect(() => {
    const pumpInterval = setInterval(() => {
      if (progress >= 95) {
        clearInterval(pumpInterval);
        setTimeout(() => {
          setShowBalloon2(true);
          setTimeout(() => {
            setLoading(false);
          }, 5000); // Wait for 5 seconds before setting loading to false
        });
      }
    }, 50);

    return () => clearInterval(pumpInterval);
  }, [progress]);

  if (loading) {
    return (
      <div className="loading-screen" style={{ backgroundColor: "rgb(30, 30, 30)" }}>
        {/* Black-circle-pump-handle */}
        <img
          src={circle}
          alt="pump-circle"
          style={{
            width: isCircleClicked ? "120px" : "100px", // Increase size when clicked
            height: isCircleClicked ? "120px" : "100px", // Increase size when clicked
            position: "absolute",
            bottom: "41.25%",
            left: "32%",
            transform: "translateX(-50%)",
            cursor: "pointer",
            transition: "width 0.2s, height 0.2s", // Add smooth transition effect
            zIndex: isCircleClicked ? 2 : 1, // Ensure it is above hose2 when clicked
            text: "Click me!",
          }}
          onClick={handleCircleClick}
        />

        {/* Hose2 */}
        <img
          src={hose2}
          alt="hose2"
          style={{
            width: "256px",
            height: "124px",
            position: "absolute",
            bottom: "53%",
            left: "32.65%",
            transform: "translateX(-50%)",
            
          }}
        />
        {/* Pump */}
        <img
          src={pump}
          alt="pump"
          style={{
            width: "277px",
            height: "60px",
            position: "absolute",
            bottom: "50%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        {/* Hose */}
        <img
          src={hoseImage}
          alt="hose"
          style={{
            width: "256px",
            height: "124px",
            position: "absolute",
            bottom: "39%",
            left: "67.35%",
            transform: "translateX(-50%)",
          }}
        />
        {/* Balloon */}
        <img
          src={showBalloon2 ? balloon2 : balloon1}
          alt="balloon"
          style={{
            width: `${balloonSize.width}px`,
            height: `${balloonSize.height}px`,
            position: "absolute",
            top: "37%",
            left: "68.1%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <button
          style={{
            backgroundColor: "green",
            color: "#fff",
            width: "120px",
            height: "50px",
            fontSize: "20px",
            position: "absolute",
            bottom: "15%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          onClick={() => setLoading(false)} // Skip fake loading and directly load ChatsPage
        >
          Load Chat Page
        </button>
        <div
          style={{
            position: "absolute",
            bottom: "62.5%",
            left: "68%",
            transform: "translateX(-50%)",
            color: "#fff",
          }}
        >{`Progress: ${progress}%`}</div>
        <div style = {{position: "absolute", bottom: "51%", right: "40%", transform: "translate(-50%, -50%)", zIndex: 1}}>Pump Air into the baloon</div>
        <div style = {{position: "absolute", bottom: "44.6%", right: "66%", transform: "translate(-50%, -50%)", zIndex: 1}}>Press</div>
      </div>
    );
  }


  //this loads the chat window
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId='aea5a48d-6cdf-49ae-b38b-4b2022e92cf8'
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;