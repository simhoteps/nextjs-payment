import { Notify } from "@/component/notify/notify";
import { IUser } from "@/types/types";
import { token } from "@/utils/helpers/Token";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IForm {
  email: string;
  userCode: string;
}

export interface UserState {
  user: IUser;
  loginForm: IForm;
}

const initialState: UserState = {
  user: {} as IUser,
  loginForm: {
    email: "",
    userCode: "",
  },
};

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async ({ mail, code }: { mail: string; code: string }) => {
    try {
      const response = await fetch(
        "https://caseapi-fe.paramtech.com.tr/api/users",
        {
          method: "POST",
          redirect: "follow",
          body: JSON.stringify({
            email: mail,
            code: code,
          }),
        }
      );
      if (!response.ok) {
        Notify.notifyError("Veri getirme işlemi başarısız oldu.");
        throw new Error("Veri getirme işlemi başarısız oldu.");
      }
      const data = await response.json();
      sessionStorage.setItem("user", JSON.stringify(data));
      return data;
    } catch (error) {
      throw new Error("Veri getirme işlemi başarısız oldu.");
    }
  }
);

export const { actions, reducer } = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ email: string,
      userCode: string}>) => {
      const mail = action.payload.email;
      const code = action.payload.userCode;
      if (mail === "user@user.com" && code === "SKQR-65") {
        state.loginForm = {email:action.payload.email,userCode:action.payload.userCode};
        sessionStorage.setItem("user", JSON.stringify( {email:action.payload.email,userCode:action.payload.userCode}));
        document.location.reload();
      } else {
        Notify.notifyError("Veri getirme işlemi başarısız oldu.");
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const selectUser = ({ user }: { user: UserState }) => user;


