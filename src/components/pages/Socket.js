import React, { useState, useEffect } from "react";

import io from "socket.io-client";

const socket = io();

function Socket() {
  const [message, setMessage] = useState("");
  //const [receivedMessagess, setReceivedMessagess] = useState([]);
  const [displayName, setDisplayName] = useState(null);
  const [displayNameInput, setDisplayNameInput] = useState("");
/*
  useEffect(() => {
    socket.on("send-message", message => {
      console.log(receivedMessagess)
      setReceivedMessagess(prevState => [...prevState, message]);
    });
  }, []); */

  const sendMessage = () => {
    socket.emit("message", `${new Date().toLocaleString()} : ${message}`);
    setMessage("");
  };

  const onUpdateMessage = event => {
    setMessage(event.target.value);
  };

  const onUpdateDisplayNameInput = event => {
    setDisplayNameInput(event.target.value);
  };

  const updateDisplayName = () => {
    setDisplayName(displayNameInput);
  };

  return (
    <div className="container">
      {displayName ? (
        <>
          <ul>
            {/*receivedMessagess.map((item, index) => (
              <li key={index}>{item}</li>
            ))*/}
          </ul>
          <input type="text" value={message} onChange={onUpdateMessage} />
          <button onClick={sendMessage}>SEND</button>
        </>
      ) : (
        <>
          <label for="display-name">Display Name</label>
          <br />
          <input
            type="text"
            value={displayNameInput}
            onChange={onUpdateDisplayNameInput}
          />
          <button onClick={updateDisplayName}>SUBMIT</button>
        </>
      )}
    </div>
  );
}

export default Socket;
