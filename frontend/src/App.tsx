import "./App.css";
import { MessageForm } from "./components/MessageForm";
import { MessageList } from "./components/MessageList";
import { useMessageViewModel } from "./components/useMessageViewModel";

function App() {
  const {
    messages,
    setUserMessage,
    submitMessage,
    deleteMessage,
    userMessage,
    error,
    loading,
  } = useMessageViewModel();
  return (
    <>
      <main className="main">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <MessageList messages={messages} eraseFunct={deleteMessage} />
        )}
        {error && <p>{error}</p>}
        <MessageForm
          writingMessage={setUserMessage}
          submitMessage={submitMessage}
          userMessage={userMessage}
        />
      </main>
    </>
  );
}

export default App;
