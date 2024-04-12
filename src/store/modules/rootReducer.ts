import { combineReducers } from "@reduxjs/toolkit";
import createNewUser from "./NewUser";
// import MessagsSlice from "./MessagsSlace";
import Alerts from "./AlerSlace";
// import LogUser from "./LogSlice";
import StatusAlertsApi from "./StatusApiAlertSlice";

import Login from "./LoginSlice";
import Message from "./Message.Slace";

export default combineReducers({
  createNewUser,
  // MessagsSlice,
  Alerts,
  StatusAlertsApi,
  // LogUser,

  Login,
  Message,
});
