import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MessageType {
  msg: string;
  type: "success" | "error" | "warning" | "";
}

const initialState: MessageType = { msg: "", type: "" };

const Alerts = createSlice({
  name: "message",
  initialState,
  reducers: {
    setAlertMessage(state, action: PayloadAction<MessageType>) {
      return action.payload;
    },
    clearMessage() {
      return initialState;
    },
  },
});

export const { setAlertMessage, clearMessage } = Alerts.actions;
export default Alerts.reducer;
