import React from "react";
import "./Main.css";
import { Assets } from "../../assets/assets";

export const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gajini</p>
        <img src={Assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Dev.</span>
          </p>
          <p>How can I help you today!</p>
        </div>

        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={Assets.compass_icon} alt="" />
          </div>

          <div className="card">
            <p>Briefly summarize this concept: urban planning</p>
            <img src={Assets.bulb_icon} alt="" />
          </div>

          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <img src={Assets.message_icon} alt="" />
          </div>

          <div className="card">
            <p>Improve the readability of the follwoing code</p>
            <img src={Assets.code_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
