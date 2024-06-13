import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  open: boolean;
  type: string;
  redirect?: string | null;
  data?: any;
  onClose?: ()=>void
}

const initialState: ModalState = {
  open: false,
  type: "",
  redirect: null,
  data: null,
  onClose:()=> null,
};

const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<ModalState>) => {
      state.type = action.payload.type;
      state.open = action.payload.open;
      state.redirect = action.payload.redirect ?? null;
      state.data = action.payload.data;
      state.onClose = action.payload.onClose;
    },
  },
});

export const { setModal } = ModalSlice.actions;

export default ModalSlice.reducer;
