import {
  Box,
  Divider,
  IconButton,
  ListItem,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";
import "./style.css";
import Message from "../Alert/Alert";
import { MessagesTableProps } from "../TypesComponents";
import ModalDelete from "../ModalDelete/ModalDelete";
import ModalTransaction from "../ModalTransaction/ModalTransaction";

const HandlerDrop: React.FC<MessagesTableProps> = ({
  messages,
  actionDelete,
  show,
  hide,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [actionType, setActionType] = useState<"message" | "user">("message");
  const closeDeleteModal = () => setOpenDelete(false);
  const openDeleteModal = () => {
    setActionType("message");
    setOpenDelete(true);
  };
  const closeModal = () => setOpen(false);
  const openModal = () => {
    setOpen(true);
  };

  return (
    <>
      <ListItem
        alignItems="flex-start"
        secondaryAction={
          <>
            <Box className={hide}>
              <IconButton
                onClick={() => openModal()}
                edge="end"
                aria-label="edit"
                sx={{ marginRight: "20px" }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                onClick={() => openDeleteModal()}
                edge="end"
                aria-label="delete"
                sx={{ marginRight: "20px" }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          </>
        }
      >
        <ListItemText
          primary={messages._name}
          secondary={messages._startDate}
        />
      </ListItem>
      <Divider variant="inset" />
      <ModalTransaction
        actionCancel={closeModal}
        open={open}
        idMessage={messages._id}
      />
      <ModalDelete
        open={openDelete}
        actionType={actionType}
        actionCancel={closeDeleteModal}
        actionDelete={() => actionDelete(messages._id)}
      />
      <Message />
    </>
  );
};

export default HandlerDrop;
