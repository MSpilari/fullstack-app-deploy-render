import { MessageFormDto } from "../dto/MessageFormDto";

const MessageForm = ({
  submitMessage,
  userMessage,
  writingMessage,
}: MessageFormDto) => {
  return (
    <section className="writeMessageSection">
      <h1>Write a message</h1>
      <form onSubmit={(event) => submitMessage(event)}>
        <textarea
          onChange={(event) => writingMessage(event.target.value)}
          value={userMessage}
        />
        <button type="submit" disabled={userMessage === ""}>
          Send message !
        </button>
      </form>
    </section>
  );
};

export { MessageForm };
