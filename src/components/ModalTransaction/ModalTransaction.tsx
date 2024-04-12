import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState, useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  selectById,
  updateMessage,
  updateOne,
} from "../../store/modules/Message.Slace";
import { setAlertMessage } from "../../store/modules/AlerSlace";
import { ModalMessagesProps } from "../TypesComponents";

const ModalTransaction: React.FC<ModalMessagesProps> = ({
  idMessage,
  open,
  actionCancel,
}) => {
  const [name, setName] = useState<string>("");
  const [descripition, setDescripition] = useState<string>("");
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");
  const messageCurretRedux = useAppSelector((state) =>
    selectById(state, idMessage ?? "")
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (messageCurretRedux) {
      setName(messageCurretRedux._name);
      setDescripition(messageCurretRedux._description);
      setStart(messageCurretRedux._startDate);
      setEnd(messageCurretRedux._endDate);
    }
  }, [messageCurretRedux]);

  const update = useCallback(() => {
    dispatch(
      updateMessage({
        name: name,
        description: descripition,
        startDate: messageCurretRedux?._startDate,
        endDate: messageCurretRedux?._endDate,
        id: idMessage,
      })
    );

    dispatch(
      updateOne({
        id: idMessage,
        changes: {
          _name: name,
          _description: descripition,
          _startDate: messageCurretRedux?._startDate,
          _endDate: messageCurretRedux?._endDate,
        },
      })
    );
    actionCancel();
    dispatch(
      setAlertMessage({
        msg: "Mensagem editada com sucesso.",
        type: "success",
      })
    );
  }, [
    actionCancel,
    descripition,
    dispatch,
    idMessage,
    messageCurretRedux?._endDate,
    messageCurretRedux?._startDate,
    name,
  ]);

  return (
    <Dialog open={open} onClose={actionCancel}>
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
        <DialogContentText>
          Tem certeza de que deseja editar este recado ?
        </DialogContentText>
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
              Editar <EditIcon fontSize="large" sx={{ marginRight: "10px" }} />
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Inicio"
              type="texte"
              value={start}
              fullWidth
              onChange={(e) => setStart(e.target.value)}
            />
          </Grid>{" "}
          <Grid item xs={6}>
            <TextField
              label="Fim"
              type="texte"
              value={end}
              fullWidth
              onChange={(e) => setEnd(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Mensagen"
              type="texte"
              value={name}
              fullWidth
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Descrição"
              type="texte"
              value={descripition}
              fullWidth
              onChange={(e) => setDescripition(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={update}>
              Editar
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ModalTransaction;
