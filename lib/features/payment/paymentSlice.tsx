import { ICreditCardForm, IPayment } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PaymentState {
  creditCardForm: ICreditCardForm;
  paymentInfo: IPayment;
}

const initialState: PaymentState = {
  creditCardForm: {} as ICreditCardForm,
  paymentInfo: {} as IPayment,
};

export const { actions, reducer } = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setPaymentSelect: (
      state,
      action: PayloadAction<{ packageIds: string[]; totalAmount: number }>
    ) => {
      const cardNumber = state.creditCardForm.cardNumber.split(" ");
      const cardNumberValue = `${cardNumber[0]}${cardNumber[1]}${cardNumber[2]}${cardNumber[3]}`;
      state.paymentInfo = {
        packageIds: action.payload.packageIds,
        cardNumber: parseInt(cardNumberValue),
        cardHolderName: state.creditCardForm.cardHolderName,
        expireDate: state.creditCardForm.expireDate,
        cvv: state.creditCardForm.cvv,
        totalAmount: action.payload.totalAmount,
        currency: "BMD",
      };
    },

    setCardInfo: (state, action: PayloadAction<ICreditCardForm>) => {
      state.creditCardForm = {
        cardHolderName: action.payload.cardHolderName,
        cardNumber: action.payload.cardNumber,
        expireDate: action.payload.expireDate,
        cvv: action.payload.cvv,
      };
    },
  },
});

export const selectPayment = ({ payment }: { payment: PaymentState }) =>
  payment;
