import { MessageListDto } from "../dto/MessageListDto";

const MessageList = ({ messages, eraseFunct }: MessageListDto) => {
  return (
    <section className="messageSection">
      <h1>Messages</h1>
      <ul>
        {messages.map((obj) => (
          <li key={obj.id}>
            {obj.message}{" "}
            <button
              onClick={() => {
                eraseFunct(obj.id);
              }}
            >
              Erase Message
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export { MessageList };
