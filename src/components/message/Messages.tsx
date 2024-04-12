import React, { useCallback, useEffect, useState } from "react";
import { Button, Grid, IconButton, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FilterListIcon from "@mui/icons-material/FilterList";
import Message from "../Alert/Alert";
import ModalFilter from "../filter/ModalFilter";
import HandlerDrop from "../handleTableDrop/HandlerTableDrop";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { setAlertMessage } from "../../store/modules/AlerSlace";
import {
  getMessages,
  selectMessage,
  deletMessage,
} from "../../store/modules/Message.Slace";
import "./style.css";
import ModalAdd from "../modalAdd/ModalAdd";
import { deleteUser } from "../../store/modules/LoginSlice";

const PageMessags: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const messagesRedux = useAppSelector(selectMessage);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const closeModalFilter = () => setOpenFilter(false);
  const openModalFilter = () => {
    setOpenFilter(true);
  };
  const closeModal = () => setOpen(false);
  const openModal = () => {
    setOpen(true);
  };

  useEffect(() => {
    const token = localStorage.getItem("userToken") as string;
    dispatch(getMessages(token));
  }, []);

  const handleDeleteMessage = useCallback(
    (_id: string) => {
      const idmessage = { id: _id, userId: "" };

      dispatch(deletMessage(idmessage));
      dispatch(
        setAlertMessage({
          msg: "Mensagem deletada com sucesso.",
          type: "success",
        })
      );
    },
    [dispatch]
  );

  const killUser = async () => {
    const token = localStorage.getItem("userToken") as string;
    dispatch(deleteUser({ token }));
    localStorage.removeItem("userToken");
    navigate("/");
  };

  const exit = async () => {
    localStorage.removeItem("userToken");
    navigate("/");
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        margin: "5px",
        maxWidth: "lg",
        minHeight: "500px",
        backgroundColor: " rgb(234, 234, 236)",
      }}
    >
      <ModalAdd open={open} actionCancel={closeModal} />

      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={12}>
          <AddCircleIcon
            color="primary"
            fontSize="large"
            className="addIcon"
            onClick={() => openModal()}
          />
        </Grid>
        <Grid
          item
          sx={{
            marginRight: "10px",
          }}
        >
          <Button variant="contained" onClick={exit}>
            Sair
          </Button>
        </Grid>
        <Grid
          item
          sx={{
            marginRight: "15px",
          }}
        >
          <Button variant="contained" onClick={killUser}>
            Delete
          </Button>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <p>Filtro</p>
        <IconButton
          onClick={() => openModalFilter()}
          edge="start"
          aria-label="edit"
        >
          <FilterListIcon />
        </IconButton>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2} sx={{ padding: "5px" }}>
          {messagesRedux.map((item) => {
            return (
              <HandlerDrop
                show={"drop"}
                hide={"larg"}
                key={item._id}
                messages={item}
                actionDelete={() => handleDeleteMessage(item._id)}
              />
            );
          })}
        </Paper>
      </Grid>
      <Message />
      <ModalFilter open={openFilter} actionCancel={closeModalFilter} />
    </Grid>
  );
};

export default PageMessags;
