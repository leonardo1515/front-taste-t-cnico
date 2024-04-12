import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiAddUser } from "../../api";
import { CreatUserType } from "../types/index";
import { setTestAlert } from "./StatusApiAlertSlice";

export const createUser = createAsyncThunk(
  "user/createUser",
  async (user: CreatUserType, { dispatch }) => {
    try {
      const data = await apiAddUser(user);
      if (data.code === 201) {
        dispatch(
          setTestAlert({
            msg: "New user successfully created",
            type: "success",
            open: "close",
          })
        );
      
        return data;
      }

      dispatch(
        setTestAlert({
          msg: data.message,
          type: "error",
          open: "close",
        })
      );
      return data;
    } catch (data: any) {
      dispatch(
        setTestAlert({
          msg: data.message,
          type: "error",
          open: "close",
        })
      );
      // return data.message;
    }
  }
);
const createNewUser = createSlice({
  name: "newUser",
  initialState: null,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = createNewUser.actions;
export default createNewUser.reducer;
