export type ModalDeleteProps = {
  actionType: "message" | "user";
  open: boolean;
  actionCancel: () => void;
  actionDelete: () => void;
};
