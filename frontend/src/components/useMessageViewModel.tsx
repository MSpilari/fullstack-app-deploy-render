import { useEffect, useState } from "react";
import { MessageDto } from "../dto/MessageDto";

const useMessageViewModel = () => {
  const [messages, setMessages] = useState<MessageDto[]>([]);
  const [userMessage, setUserMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const getMessagesUrl = import.meta.env.VITE_GET_MESSAGES_URL;
  const postMessagesUrl = import.meta.env.VITE_POST_MESSAGES_URL;
  const deleteMessageUrl = import.meta.env.VITE_DELETE_MESSAGES_URL;

  const loadMessages = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(getMessagesUrl);
      const data = await response.json();
      setMessages(data);
    } catch (err) {
      setError(`Failed to load messages due to : ${err}`);
    } finally {
      setLoading(false);
    }
  };

  const submitMessage = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    try {
      const response = await fetch(postMessagesUrl, {
        method: "POST",
        body: JSON.stringify({ message: userMessage }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      setUserMessage("");
      await loadMessages();
    } catch (err) {
      setError("Error sending message.");
    }
  };

  const deleteMessage = async (id: String) => {
    await fetch(`${deleteMessageUrl}/${id}`, { method: "DELETE" });
    await loadMessages();
  };

  useEffect(() => {
    loadMessages();
  }, []);

  return {
    messages,
    userMessage,
    setUserMessage,
    submitMessage,
    deleteMessage,
    loading,
    error,
  };
};

export { useMessageViewModel };
