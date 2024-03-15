import React from "react";
import {
  PhoneIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const CustomHeader = ({ chat }) => {
  console.log("chat.description", chat.description);
  return (
    <div className="chatroom-header">
      <div className="flexbetween">
        <ChatBubbleLeftRightIcon className="chat-icon" />
        <h3 className="header-text">{chat.title}</h3>
      </div>
      <div className="flexbetween">
        <PhoneIcon className="phone-icon" />
        {chat.description !== "⬅️ ⬅️ ⬅️" ? (
          <p className="text-header">{chat.description}</p>
        ) : (
          <p className="text-header">no chat selected</p>
        )}
      </div>
    </div>
  );
};

export default CustomHeader;
