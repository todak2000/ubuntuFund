import { NavbarItemProps, UserProps } from '@/lib/components/constants/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const defaultCurrency = "NGN";
export const initialUser: UserProps = {
  name: "",
  email: "",
  photo: "",
  uid: "",
  prefferedCurrency: defaultCurrency,
};

const UserSlice = createSlice({
  name: "user",
  initialState: initialUser,
  reducers: {
    setUser: (
      state: UserProps,
      action: PayloadAction<Omit<UserProps, "prefferedCurrency">>
    ) => {
      return {
        ...action.payload,
        prefferedCurrency: state.prefferedCurrency,
      };
    },
    clearUser: () => {
      return initialUser;
    },
    updateCurrency: (
      state: UserProps,
      action: PayloadAction<"USD" | "NGN">
    ) => {
      return { ...state, prefferedCurrency: action.payload };
    },
  },
});
export const { setUser, clearUser, updateCurrency } = UserSlice.actions;

export default UserSlice.reducer;
