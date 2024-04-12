import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useCallback, useRef, useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { addMesage } from "../../store/modules/Message.Slace";
import { setAlertMessage } from "../../store/modules/AlerSlace";
import "./style.css";
import { v4 as creatUuid } from "uuid";

interface ModalTransactionProps {
  open: boolean;
  actionCancel: () => void;
}

const ModalAdd: React.FC<ModalTransactionProps> = ({ open, actionCancel }) => {
  const [name, setName] = useState<string>("");
  const [descripition, setDescripition] = useState<string>("");
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");
  const inputName = useRef<HTMLInputElement | undefined>();
  const inputDescription = useRef<HTMLInputElement | undefined>();
  const dispatch = useAppDispatch();

  const addMessag = useCallback(() => {
    if (start.length < 3) {
      dispatch(
        setAlertMessage({
          msg: "O inicio não pode esta vazio.",
          type: "warning",
        })
      );
      inputName.current?.focus();
      return;
    }

    if (end.length < 3) {
      dispatch(
        setAlertMessage({
          msg: "O fim não pode esta vazio.",
          type: "warning",
        })
      );
      inputName.current?.focus();
      return;
    }

    if (name.length < 4) {
      dispatch(
        setAlertMessage({
          msg: "O nome deve ter no minimo 4 caracteres.",
          type: "warning",
        })
      );
      inputName.current?.focus();
      return;
    }
    if (descripition.length < 4) {
      dispatch(
        setAlertMessage({
          msg: "A descrição deve ter no minimo 4 caracteres.",
          type: "warning",
        })
      );
      inputDescription.current?.focus();
      return;
    }
    const newMwssag = {
      name: name,
      description: descripition,
      startDate: start,
      endDate: end,
      id: creatUuid(),
      idUser: "",
    };

    dispatch(addMesage(newMwssag));
    dispatch(
      setAlertMessage({
        msg: "Nova mensagem adicionada com sucesso.",
        type: "success",
      })
    );
  }, [descripition, dispatch, end, name, start]);

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
              Nova tarefa
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Data de inicio"
              type="text"
              value={start || ""}
              onChange={(e) => setStart(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              sx={{
                maxWidth: "95%",
              }}
              label="Data de fim"
              type="text"
              value={end || ""}
              fullWidth
              onChange={(e) => setEnd(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{
                maxWidth: "500px",
                marginLeft: "20px",
              }}
              fullWidth
              label="Name"
              type="text"
              value={name || ""}
              inputRef={inputName}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <textarea
              className="text-area"
              placeholder="Descrição"
              onChange={(e) => setDescripition(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button onClick={addMessag}>Criar</Button>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ModalAdd;
