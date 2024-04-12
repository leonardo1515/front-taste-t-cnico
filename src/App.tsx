import React from "react";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./store";
import AppRoutes from "./routes/AppRoutes";
import themeDefault from "./config/theme/Default";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeDefault}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRoutes />
        </PersistGate>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
