import React from "react";
import style from "./sidebar.module.css";

function Sidebar() {
  return (
    <div className={style.sidebar}>
      {/* header */}
      <div className={style.logo}>
        {" "}
        <img src="ChatNovalogo.png" alt="chatnovalogo" height={"20px"} />
        <h1 className={style.title}>ChatNova</h1>
      </div>

      {/* New Chat Button */}
      <button className={style.NewChat}>+ New Chat</button>

      {/* history */}
      <ul className={style.chatList}>
        <li>Chat 1</li>
        <li>Chat 2</li>
      </ul>

      {/* sign up and login */}
      <div className={style.authButtons}>
        {/* <button className={style.login}>Login</button>
        <button className={style.signup}>Sign Up</button> */}
        <p className={style.commingSOON}>Auth is coming soon</p>
      </div>
    </div>
  );
}
export default Sidebar;
