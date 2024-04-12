import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { ModalDeleteProps } from "../TypesComponents";

const ModalDelete: React.FC<ModalDeleteProps> = ({
  actionType,
  open,
  actionCancel,
  actionDelete,
}) => {
  return (
    <Dialog open={open} onClose={actionCancel}>
      <DialogTitle>
        {actionType === "user" ? " Deletar  usuario " : " Deletar mensagem "}
        <IconButton
          aria-label="close"
          onClick={actionCancel}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {actionType === "user"
            ? " Tem certeza que deseja deletar o usuario ?"
            : " Tem certeza que deseja deletar esta mensagem"}
        </DialogContentText>
        <Button
          sx={{ marginTop: "15px", marginBottom: "10px" }}
          onClick={actionCancel}
        >
          Calcelar
        </Button>
        <Button
          sx={{ marginTop: "15px", marginBottom: "10px" }}
          onClick={actionDelete}
        >
          Deletar
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ModalDelete;
