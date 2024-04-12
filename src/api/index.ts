import axios from "axios";
import { AddMessageProps } from "../store/types";
import {
  CreateUserProps,
  LoginProps,
  ApiResponse,
  DeletUserProps,
  UpdateMessageProps,
  LogoffProps,
  DeleteMessagesProps,
} from "./types";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const apiLoginApp = async (login: LoginProps): Promise<ApiResponse> => {
  try {
    const result = await axios.post("/user/login", login);

    return result.data;
  } catch (error: any) {
    if (error.request?.response) {
      return JSON.parse(error.request?.response);
    }

    return {
      ok: false,
      message: error.toString(),
    };
  }
};
const apiAddUser = async (data: CreateUserProps) => {
  try {
    const response = await axios.post("/user/create", data);
    return response.data.code;
  } catch (error: any) {
    if (error.request?.response) {
      return JSON.parse(error.request?.response);
    }

    return {
      ok: false,
      message: error.toString(),
    };
  }
};

const apiDeleteUser = async (id: any): Promise<ApiResponse> => {
  axios.defaults.headers.common["authorization"] = "";
  axios.defaults.headers.common["authorization"] = id.token;
  try {
    const response = await axios.delete("/user/delete", id);
    return response.data;
  } catch (error: any) {
    if (error.request?.response) {
      return JSON.parse(error.request?.response);
    }

    return {
      ok: false,
      message: error.toString(),
    };
  }
};

const apiLogoffApp = async (logoff: LogoffProps) => {
  try {
    const result = await axios.put(`user/${logoff.id}/logoff`, logoff);
    return result.data;
  } catch (error: any) {
    console.log(error);
    if (error.request?.response) {
      return JSON.parse(error.request?.response);
    }

    return {
      ok: false,
      message: error.toString(),
    };
  }
};

const apiGetTask = async (token: any): Promise<ApiResponse> => {
  axios.defaults.headers.common["authorization"] = "";
  axios.defaults.headers.common["authorization"] = token;
  try {
    const result = await axios.get("/task/getAll");

    return result.data;
  } catch (error: any) {
    console.log(error);
    if (error.request?.response) {
      return JSON.parse(error.request?.response);
    }

    return {
      ok: false,
      message: error.toString(),
    };
  }
};

const apiAddTask = async (message: AddMessageProps) => {
  const token = localStorage.getItem("userToken") as string;
  axios.defaults.headers.common["authorization"] = "";
  axios.defaults.headers.common["authorization"] = token;
  try {
    const result = await axios.post("/task/create", message);

    return result.data;
  } catch (error: any) {
    if (error.request?.response) {
      return JSON.parse(error.request?.response);
    }

    return {
      ok: false,
      message: error.toString(),
    };
  }
};

const apiUpdateTask = async (message: UpdateMessageProps) => {
  const token = localStorage.getItem("userToken") as string;
  axios.defaults.headers.common["authorization"] = "";
  axios.defaults.headers.common["authorization"] = token;
  try {
    const result = await axios.put("/task/update", message);

    return result.data;
  } catch (error: any) {
    console.log(error);
    if (error.request?.response) {
      return JSON.parse(error.request?.response);
    }

    return {
      ok: false,
      message: error.toString(),
    };
  }
};

const apiDeleteTask = async (
  delet: DeleteMessagesProps
): Promise<ApiResponse> => {
  try {
    const result = await axios.delete(`/task/${delet.id}/delete`);

    return result.data;
  } catch (error: any) {
    if (error.request?.response) {
      return JSON.parse(error.request?.response);
    }

    return {
      ok: false,
      message: error.toString(),
    };
  }
};

export {
  apiLoginApp,
  apiAddUser,
  apiLogoffApp,
  apiDeleteUser,
  apiGetTask,
  apiAddTask,
  apiDeleteTask,
  apiUpdateTask,
};
