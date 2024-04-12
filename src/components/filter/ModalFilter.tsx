import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";
import React, { useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { deletMessage } from "../../store/modules/Message.Slace";
import { setAlertMessage } from "../../store/modules/AlerSlace";
import { selectMessage } from "../../store/modules/Message.Slace";
import HandlerDrop from "../handleTableDrop/HandlerTableDrop";

interface ModalTransactionProps {
  open: boolean;
  actionCancel: () => void;
}

const ModalFilter: React.FC<ModalTransactionProps> = ({
  open,
  actionCancel,
}) => {
  const [message, setMessage] = useState<string>("");
  const messagesRedux = useAppSelector(selectMessage);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.Login);
  const e = messagesRedux.filter((item) => item._name.includes(message));

  const handleDeleteMessage = useCallback(
    (_id: string) => {
      const del = { id: _id, userId: user.id };
      dispatch(deletMessage(del));
      dispatch(
        setAlertMessage({
          msg: "Mensagem deletada com sucesso.",
          type: "success",
        })
      );
    },
    [dispatch, user.id]
  );

  return (
    <Dialog
      open={open}
      onClose={actionCancel}
      sx={{ backgroundColor: "rgba(248, 251, 251, 0.8)" }}
    >
      <DialogTitle>
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
        <DialogContentText>Filtre pelo nome da tarefa</DialogContentText>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              sx={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              Filtro
              <FilterListIcon fontSize="large" sx={{ marginRight: "10px" }} />
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              sx={{
                maxWidth: "700px",
                minWidth: "500px",
              }}
              label="Mensagen"
              type="texte"
              value={message || ""}
              fullWidth
              onChange={(e) => setMessage(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ padding: "5px" }}>
            {e.map((item) => {
              return (
                <HandlerDrop
                  show={"show"}
                  hide={"hide"}
                  key={item._id}
                  messages={item}
                  actionDelete={() => handleDeleteMessage(item._id)}
                />
              );
            })}
          </Paper>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ModalFilter;
