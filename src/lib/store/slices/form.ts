import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FormData = {
  category: string;
  recipientQuestion: string;
  recipient: string;
  country: string;
  currency: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  amountToRaise: string;
  proof:File[];
  campaignPeriod: number;
};

const initialState: FormData = {
  category: '',
  recipientQuestion: '',
  recipient: '',
  country: '',
  currency: '',
  description: '',
  phone: '',
  email: '',
  address: '',
  proof:[],
  amountToRaise: '',
  campaignPeriod: 0,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<Partial<FormData>>) => {
      return { ...state, ...action.payload };
    },
    resetForm: () => initialState,
  },
});

export const { updateForm, resetForm } = formSlice.actions;

export default formSlice.reducer;
