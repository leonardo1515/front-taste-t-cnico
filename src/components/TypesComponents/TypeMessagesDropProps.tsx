import { GetMessageProps } from "../../store/types";

export type MessagesTableProps = {
  show: string;
  hide: string;
  messages: GetMessageProps;
  actionDelete: (id: string) => void;
};
