import { GetMessageProps } from "../../store/types";

export type DropButtonProps = {
  message: GetMessageProps;
  actionDelete: (id: string) => void;
  saveMessag: () => void;
  openModal: () => void;
};
