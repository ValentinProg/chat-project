import { useEffect, useState } from "react";
import {
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { collection } from "firebase/firestore";
import "../styles/Chat.css";

export const Chat = (props) => {
  // const {} = props
  const [newMessage, setNewMessage] = useState("");
  const messagesRef = collection(db, "messages");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const queryMessages = query(messagesRef, where("room", "==", props.room));
    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsuscribe()
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage === "") return;

    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room: props.room,
    });

    setNewMessage("");
  };
  return (
    <div className="chat-app">
      <div>
        {messages.map((message) => (
          <h1>{message.text}</h1>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="new-message-form">
        <input
          className="new-message-input"
          placeholder="Type your message here..."
          type="text"
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
};
