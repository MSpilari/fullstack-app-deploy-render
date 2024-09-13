import { MessageDto } from "../dto/MessageDto";

const MessageList = ({
  messages,
  eraseFunct,
}: {
  messages: MessageDto[];
  eraseFunct: (id: String) => void;
}) => {
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
