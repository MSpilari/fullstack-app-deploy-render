import { MessageDto } from "./MessageDto";

type MessageListDto = {
  messages: MessageDto[];
  eraseFunct: (id: String) => void;
};

export type { MessageListDto };
