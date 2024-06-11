import React, { useState } from "react";

const TrafficLight = () => {
  const [shadowRed, setShadowRed] = useState("none");
  const [shadowYellow, setShadowYellow] = useState("none");
  const [shadowGreen, setShadowGreen] = useState("none");
  const [yellowLightToPurple, setYellowLightToPurple] = useState("yellow");

  const shadowRedColor = (bgColor) => {
    setShadowRed(bgColor);
  };
  const shadowYellowColor = (bgColor) => {
    setShadowYellow(bgColor);
  };
  const shadowGreenColor = (bgColor) => {
    setShadowGreen(bgColor);
  };
  const yellowLightChange = (LigthColor) => {
    setYellowLightToPurple(LigthColor);
  };

  return (
    <div className="container text-center p-5">
      <div className="row justify-content-center d-flex flex-column align-items-center">
        <div className="col-auto bg-dark text-white rounded-top p-3 d-flex flex-column">
          <div
            style={{
              backgroundColor: "red",
              width: "120px",
              height: "120px",
              boxShadow: shadowRed,
            }}
            className="rounded-circle"
            onMouseEnter={() => shadowRedColor("0 0 18px yellow")}
            onMouseOut={() => shadowRedColor("none")}
            onClick={() =>
              alert("No, no, the red color is fine! Try another one...")
            }
          ></div>
        </div>
        <div className="col-auto bg-dark text-white p-3 d-flex flex-column">
          <div
            style={{
              backgroundColor: yellowLightToPurple,
              width: "120px",
              height: "120px",
              boxShadow: shadowYellow,
            }}
            className="rounded-circle"
            onMouseEnter={() => shadowYellowColor("0 0 18px yellow")}
            onMouseOut={() => shadowYellowColor("none")}
            onClick={() => yellowLightChange("yellow")}
          ></div>
        </div>
        <div className="col-auto bg-dark text-white rounded-bottom p-3 d-flex flex-column">
          <div
            style={{
              backgroundColor: "green",
              width: "120px",
              height: "120px",
              boxShadow: shadowGreen,
            }}
            className="rounded-circle"
            onMouseEnter={() => shadowGreenColor("0 0 18px yellow")}
            onMouseOut={() => shadowGreenColor("none")}
            onClick={() =>
              alert("No, no, the green color is fine! Try another one...")
            }
          ></div>
        </div>
      </div>
      <div
        className="mt-3 mx-2 pt-3 btn btn-warning"
        onClick={() =>
          alert("No, this is not it, but you're on the right track...")
        }
      >
        <p>Discover hidden features.</p>
      </div>
      <div
        className="mt-3 mx-2 pt-3 btn btn-warning"
        onClick={() =>
          yellowLightChange(
            "#800080",
            alert(
              "Hey!!! Traffic lights don't have this color, try to restore the color without reloading the page."
            )
          )
        }
      >
        <p>Purple Ligth?</p>
      </div>
    </div>
  );
};

export default TrafficLight;
