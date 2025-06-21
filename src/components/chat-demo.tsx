"use client";
import Script from "next/script";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ChatWidget: any;
  }
}

export default function ChatWidget() {
  const initChat = () => {
    if (typeof window !== "undefined" && window.ChatWidget) {
      window.ChatWidget.renderChatComponent(
        "chat-widget",
        "9f8a5c5d-4e13-4122-b75d-d9e288b65e21",
        "952fc349-a37b-43be-8a1b-ed469e396a30"
      );
    }
  };

  return (
    <>
      <Script
        src="https://chat.hilalsoftware.tools/output.css"
        strategy="afterInteractive"
      />
      <Script
        src="https://unpkg.com/react@18/umd/react.production.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://chat.hilalsoftware.tools/chat_v2.js"
        strategy="afterInteractive"
        onLoad={initChat}
      />
      <div
        id="chat-widget"
        style={{
          position: "fixed",
          bottom: "1rem",
          right: "1rem",
          zIndex: 9999,
        }}
      />
    </>
  );
}
