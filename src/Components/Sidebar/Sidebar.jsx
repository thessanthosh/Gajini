import React, { useState } from "react";
import "./Sidebar.css";
import { Assets } from "../../assets/assets/";

export const Sidebar = () => {
  const [Extended, SetExtended] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => SetExtended((prev) => !prev)}
          className="menu"
          src={Assets.menu_icon}
          alt=""
        />
        <div className="new-chat">
          <img src={Assets.plus_icon} alt="" />
          {Extended ? <p> New Chat</p> : null}
        </div>
        {Extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={Assets.message_icon} alt="" />
              <p> What is react..</p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={Assets.question_icon} alt="" />
          {Extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={Assets.history_icon} alt="" />
          {Extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={Assets.setting_icon} alt="" />
          {Extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};
