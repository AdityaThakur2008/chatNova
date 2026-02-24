import React from "react";
import style from "./InputBox.module.css";

function InputBox() {
  return (
    <div className={style.inputBox}>
      <div className={style.toolbar}></div>
      <div className={style.inputRow}>
        <input className={style.input} placeholder="Send a message..." />
        <button className={style.sendBtn}>Send</button>
      </div>

      <div className={style.footer}>
        <p>ChatNova can make mistakes. Project by Aditya</p>
      </div>
    </div>
  );
}

export default InputBox;
