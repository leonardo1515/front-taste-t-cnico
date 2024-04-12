import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MessageType {
  msg: string;
  type: "success" | "error" | "warning" | "";
  open: "open" | "close";
}

const initialState: MessageType = { msg: "", type: "", open: "close" };

const StatusAlertsApi = createSlice({
  name: "message",
  initialState,
  reducers: {
    setTestAlert(state, action: PayloadAction<MessageType>) {
      return action.payload;
    },
    clearMessage() {
      return initialState;
    },
    showAlert(state, action) {
      state.open = action.payload;
    },
  },
});

export const { setTestAlert, clearMessage, showAlert } =
  StatusAlertsApi.actions;
export default StatusAlertsApi.reducer;
