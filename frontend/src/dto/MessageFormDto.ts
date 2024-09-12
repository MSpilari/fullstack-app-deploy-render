type MessageFormDto = {
  submitMessage: (event: React.FormEvent) => Promise<void>;
  userMessage: string;
  writingMessage: (text: string) => void;
};

export type { MessageFormDto };
