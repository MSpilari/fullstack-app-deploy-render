import { MessageDto } from "../dto/MessageDto";

const MessageList = ({ messages }: { messages: MessageDto[] }) => {
  return (
    <section className="messageSection">
      <h1>Messages</h1>
      <ul>
        {messages.map((obj) => (
          <li key={obj.id}>{obj.message}</li>
        ))}
      </ul>
    </section>
  );
};

export { MessageList };
