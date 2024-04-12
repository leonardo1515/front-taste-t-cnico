import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "..";
import {
  AddMessageProps,
  DeletePopsMessage,
  GetMessageProps,
} from "../types/index";
import {
  apiAddTask,
  apiGetTask,
  apiUpdateTask,
  apiDeleteTask,
} from "../../api";

const adapter = createEntityAdapter<GetMessageProps>({
  selectId: (item) => item._id,
});

export const { selectAll: selectMessage, selectById } = adapter.getSelectors(
  (state: RootState) => state.Message
);

export const getMessages = createAsyncThunk(
  "user/getAllmessages",
  async (id: string) => {
    const result = await apiGetTask(id);
    if (result.ok) {
      return result.data;
    }

    return [];
  }
);

export const addMesage = createAsyncThunk(
  "user/addMessage",
  async (message: AddMessageProps) => {
    const result = await apiAddTask({ ...message });
    if (result.ok) {
      return {
        ok: true,
        data: result,
      };
    }

    return {
      ok: false,
    };
  }
);

export const updateMessage = createAsyncThunk(
  "user/editeMessage",
  async (message: any) => {
    const { result } = await apiUpdateTask(message);
    let changes = {};

    if (result.ok) {
      changes = {
        name: message.message,
        descripition: message.descript,
        startDate: message.save,
        endDate: message.end,
      };
    }

    return {
      id: message.idCurrentMessage,
      changes,
    };
  }
);

export const deletMessage = createAsyncThunk(
  "user/deletMessage",
  async (messages: DeletePopsMessage) => {
    const result = await apiDeleteTask(messages);

    if (result.ok) {
      return {
        ok: true,
        data: messages.id,
      };
    }

    return {
      ok: false,
    };
  }
);

const messageSlice = createSlice({
  name: "message",
  initialState: adapter.getInitialState(),
  reducers: {
    addOne: adapter.addOne,
    remove: adapter.removeOne,
    addMany: adapter.addMany,
    updateOne: adapter.updateOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getMessages.fulfilled,
        (state, action: PayloadAction<GetMessageProps[]>) => {
          adapter.setAll(state, action.payload);
        }
      )
      .addCase(addMesage.fulfilled, (state, action) => {
        const result = action.payload.data.data;
        adapter.addOne(state, result);
      })
      .addCase(deletMessage.fulfilled, (state, action) => {
        if (action.payload.ok === true) {
          const result = action.payload.data;
          adapter.removeOne(state, result!);
        }
      })
      .addCase(updateMessage.fulfilled, (state, action) => {});
  },
});

export const { addOne, addMany, updateOne } = messageSlice.actions;
export default messageSlice.reducer;
